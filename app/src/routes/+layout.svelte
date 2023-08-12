<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import authStore from '/workspace/Fli-Golf/app/src/lib/AuthStore';
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';

	let session: AuthSession | null = null;
	let role: 'Admin' | 'Participant' | null = null;

	onMount(async () => {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			console.error('Error fetching session: ', error);
		} else {
			session = data?.session;
		}

		// Subscribe to session changes
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN') {
				authStore.update((state) => {
					state.isLoggedIn = true;
					return state;
				});
			} else if (event === 'SIGNED_OUT') {
				authStore.update((state) => {
					state.isLoggedIn = false;
					return state;
				});
			}
		});
	});

	let isLoggedIn = false;
	let formType;
	authStore.subscribe((state) => {
		isLoggedIn = state.isLoggedIn;
		formType = state.formType;
	});

	function setFormToRegister() {
		authStore.update((state) => {
			state.formType = 'register';
			return state;
		});
	}

	function setFormToLogin() {
		authStore.update((state) => {
			state.formType = 'login';
			return state;
		});
	}

	function handleLogout() {
		authStore.update((state) => {
			state.isLoggedIn = false;
			return state;
		});
	}

	function handleUpdatePassword() {
		authStore.update((state) => {
			state.formType = 'updatePassword';
			return state;
		});
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">FLI GOLF</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if !session}
					<button class="btn btn-sm variant-ghost-surface" on:click={setFormToRegister}>
						Register
					</button>
					<button class="btn btn-sm variant-ghost-surface" on:click={setFormToLogin}>
						Sign In
					</button>
				{:else}
					<button class="btn btn-sm variant-ghost-surface" on:click={handleLogout}>
						Sign Out
					</button>
					<button class="btn btn-sm variant-ghost-surface" on:click={handleUpdatePassword}>
						Update Password
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
