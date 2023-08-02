<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	import Account from '/workspace/Fli-Golf/app/src/lib/Account.svelte';
	import Auth from '/workspace/Fli-Golf/app/src/lib/Auth.svelte';
	import AdminDashboard from '/workspace/Fli-Golf/app/src/lib/AdminDashboard.svelte';
	import ParticipantDashboard from '/workspace/Fli-Golf/app/src/lib/ParticipantDashboard.svelte';

	let session: AuthSession;
	let userRole: string | null = null;

	onMount(async () => {
		supabase.auth.onAuthStateChange(async (_event, session) => {
			if (session && session.user) {
				const { data, error } = await supabase
					.from('profiles')
					.select('role')
					.eq('id', session.user.id)
					.single();

				if (error) {
					console.error(error);
				} else {
					userRole = data?.role;
				}
			}
		});
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#if !session}
		<Auth />
	{:else if userRole === 'Admin'}
		<AdminDashboard {session} />
	{:else if userRole === 'Participant'}
		<ParticipantDashboard {session} />
	{:else}
		<Account {session} />
	{/if}
</div>
