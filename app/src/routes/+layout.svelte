<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import authStore from '/workspace/Fli-Golf/app/src/lib/AuthStore';
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';
	import Banner from '/workspace/Fli-Golf/app/src/lib/Banner.svelte';

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
		supabase.auth.onAuthStateChange((event, sessionData) => {
			session = sessionData; // Update the session variable with the received session data

			if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
				// USER_UPDATED event can also be added to cover cases where user data might have changed but not their authentication status
				authStore.update((state) => {
					state.isLoggedIn = true;
					return state;
				});
			} else if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
				// USER_DELETED can be added if you want to react when a user deletes their account
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

	async function handleUpdatePassword() {
		if (session && session.user?.email) {
			try {
				const { data, error } = await supabase.auth.resetPasswordForEmail(session.user.email, {
					redirectTo:
						'https://5173-halftimeharry-fligolf-ivnbr6c5g1v.ws-us103.gitpod.io/account/update-password'
				});

				if (error) {
					console.error('Error sending password reset email:', error.message);
				} else {
					console.log('Password reset email sent:', data);
					authStore.update((state) => {
						state.formType = 'updatePassword';
						return state;
					});
				}
			} catch (error) {
				console.error('Exception caught:', error);
			}
		} else {
			console.error('No user session available or email missing from session');
		}
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
					<button class="btn btn-sm variant-ghost-surface" on:click={() => supabase.auth.signOut()}>
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
	{#if !session}
		<Banner />
	{/if}
</AppShell>
