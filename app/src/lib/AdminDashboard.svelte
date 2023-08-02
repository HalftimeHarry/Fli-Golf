<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation'; // Import 'goto'
	import { supabase } from '../supabaseClient';

	let currentTile: number = 0;

	const navigate = (path: string) => {
		goto(path);
	};
</script>

<div class="fixed top-0 left-0 mt-16">
	<h1 class="text-white">Admin Dashboard</h1>

	<AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/"><i class="fas fa-home" /></AppRailAnchor>
		</svelte:fragment>
		<!-- --- -->
		<AppRailTile
			on:click={() => navigate('/')}
			bind:group={currentTile}
			name="groups"
			value={0}
			title="Profile"
		>
			<svelte:fragment slot="lead"><i class="fas fa-user-circle" /></svelte:fragment>
			<span class="text-white">Profile</span>
		</AppRailTile>
		<AppRailTile
			on:click={() => navigate('/recent-activity')}
			bind:group={currentTile}
			name="recent"
			value={1}
			title="Recent Activity"
		>
			<svelte:fragment slot="lead"><i class="fas fa-chart-bar" /></svelte:fragment>
			<span class="text-white">Recent Activity</span>
		</AppRailTile>
		<AppRailTile
			on:click={() => navigate('/contacts')}
			bind:group={currentTile}
			name="contacts"
			value={2}
			title="Create Contacts"
		>
			<svelte:fragment slot="lead"><i class="fas fa-cog" /></svelte:fragment>
			<span class="text-white">Create Contacts</span>
		</AppRailTile>
		<!-- --- -->
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" title="Account" on:click={() => supabase.auth.signOut()}>
				<i class="fas fa-sign-out-alt text-white" />
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
</div>
