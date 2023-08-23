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
	let role: 'Admin' | 'Participant' | 'Professional' | null = null;

	async function fetchUserRole(_session: AuthSession) {
		if (_session) {
			const { data: profile, error } = await supabase
				.from('profiles')
				.select('role')
				.eq('id', _session.user.id)
				.single();

			if (error) {
				console.error('Error fetching profile: ', error);
			} else {
				role = profile?.role;
			}
		}
	}

	onMount(async () => {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			console.error('Error fetching session: ', error);
		} else {
			session = data?.session;
		}

		fetchUserRole(session);

		supabase.auth.onAuthStateChange(async (_event, _session) => {
			session = _session;
			fetchUserRole(session);
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
