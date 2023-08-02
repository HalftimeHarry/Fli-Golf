<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';
  import type { AuthSession } from '@supabase/supabase-js';
  import Account from '/workspace/Fli-Golf/app/src/lib/Account.svelte';
  import Auth from '/workspace/Fli-Golf/app/src/lib/Auth.svelte';
  import AdminDashboard from '/workspace/Fli-Golf/app/src/lib/AdminDashboard.svelte';
  import ParticipantDashboard from '/workspace/Fli-Golf/app/src/lib/ParticipantDashboard.svelte';

  let session: AuthSession;
  let role: 'Admin' | 'Participant' | null = null;

  onMount(async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Error fetching session: ', error);
    } else {
      session = data?.session;
    }

    if (session) {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile: ', profileError);
      } else {
        role = profile?.role;
      }
    }

    supabase.auth.onAuthStateChange(async (_event, _session) => {
      session = _session;
      
      if (session) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching profile: ', error);
        } else {
          role = profile?.role;
        }
      }
    });
  });
</script>

<div class="container" style="padding: 50px 0 100px 0">
  {#if !session}
    <Auth />
  {:else if role === 'Admin'}
    <AdminDashboard {session} />
    <Account {session} />
  {:else if role === 'Participant'}
    <ParticipantDashboard {session} />
  {/if}
</div>
