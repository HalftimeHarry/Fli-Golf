<!-- AdminNavigation.svelte -->
<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation'; // Import 'goto'
	import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';

	let currentTile: number = 0;

	const navigate = (path: string) => {
		goto(path);
	};
</script>

<div class="fixed top-0 left-0 mt-64">
	<h1 class="text-white" />

	<AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/"><i class="fas fa-home" /></AppRailAnchor>
		</svelte:fragment>
		<!-- --- -->
		<AppRailTile
			on:click={() => navigate('/contacts')}
			bind:group={currentTile}
			name="groups"
			value={0}
			title="Contacts"
		>
			<svelte:fragment slot="lead"><i class="fa fa-plus" /></svelte:fragment>
			<span class="text-white">Contacts</span>
		</AppRailTile>
		<AppRailTile
			on:click={() => navigate('/sponsors')}
			bind:group={currentTile}
			name="sponsor"
			value={1}
			title="Sponsor"
		>
			<svelte:fragment slot="lead"><i class="fa fa-list" /></svelte:fragment>
			<span class="text-white">Sponsors</span>
		</AppRailTile>
		<AppRailTile
			on:click={() => navigate('/venues')}
			bind:group={currentTile}
			name="venues"
			value={2}
			title="Venues"
		>
			<svelte:fragment slot="lead"><i class="fa fa-list" /></svelte:fragment>
			<span class="text-white">Venues</span>
		</AppRailTile>
		<AppRailTile
			on:click={() => navigate('/pro')}
			bind:group={currentTile}
			name="pro"
			value={2}
			title="Pro-Players"
		>
			<svelte:fragment slot="lead"><i class="fa fa-list" /></svelte:fragment>
			<span class="text-white">Pro-Players</span>
		</AppRailTile>
		<!-- --- -->
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" title="Account" on:click={() => supabase.auth.signOut()}>
				<i class="fas fa-sign-out-alt text-white" />
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
</div>
