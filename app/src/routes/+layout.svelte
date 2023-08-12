<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import authStore from '/workspace/Fli-Golf/app/src/lib/AuthStore';

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
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">FLI GOLF</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- ... Your existing buttons ... -->
				<button class="btn btn-sm variant-ghost-surface" on:click={setFormToRegister}>
					Register
				</button>
				<button class="btn btn-sm variant-ghost-surface" on:click={setFormToLogin}>
					Sign In
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
