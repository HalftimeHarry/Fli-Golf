<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../supabaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	import Account from '../lib/Account.svelte';
	import Auth from '../lib/Auth.svelte';
	import AdminDashboard from '../lib/AdminDashboard.svelte';
	import ParticipantDashboard from '../lib/ParticipantDashboard.svelte';
	import { fade } from 'svelte/transition';
	import ProDashboard from '../lib/ProDashboard.svelte';

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

{#if !session}
	<Auth />
{:else if role === 'Admin'}
	<div class="flex flex-col min-h-screen">
		<div class="container mx-auto px-4 flex-shrink-0">
			<AdminDashboard {session} />
		</div>
		<div
			class="grid justify-items-center mt-8 flex-grow"
			in:fade={{ duration: 2000 }}
			out:fade={{ duration: 1000 }}
		>
			<Account {session} />
		</div>
	</div>
{:else if role === 'Professional'}
	<div class="flex flex-col min-h-screen">
		<div class="container mx-auto px-4 flex-shrink-0">
			<ProDashboard {session} />
		</div>
		<div
			class="grid justify-items-center mt-8 flex-grow"
			in:fade={{ duration: 2000 }}
			out:fade={{ duration: 1000 }}
		>
			<Account {session} />
		</div>
	</div>
{:else if role === 'Participant'}
	<div class="flex flex-col min-h-screen">
		<div class="container mx-auto px-4 flex-shrink-0">
			<ParticipantDashboard {session} />
		</div>
		<div
			class="grid justify-items-center mt-8 flex-grow"
			in:fade={{ duration: 2000 }}
			out:fade={{ duration: 1000 }}
		>
			<Account {session} />
		</div>
	</div>
{/if}
