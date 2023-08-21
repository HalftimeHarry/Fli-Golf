<!-- src/routes/venues/+page.svelte -->
<script>
	import VenueTable from '/lib/VenueTable.svelte'; // Ensure the path is correct
	import { fade } from 'svelte/transition';

	let showVenuesTable = true;
</script>

<div class="container mx-auto px-4 mt-16 ml-24">
	{#if showVenuesTable}
		<div in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
			<VenueTable />
		</div>
	{/if}
</div>
