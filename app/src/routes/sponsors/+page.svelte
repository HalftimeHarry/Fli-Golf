<script>
	import SponsorrTable from '../../lib/SponsorTable.svelte'; // Ensure the path is correct
	import { fade } from 'svelte/transition';

	let showSponsorTable = true;
</script>

<div class="container mx-auto px-4 mt-16 ml-24">
	{#if showSponsorTable}
		<div in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
			<SponsorrTable />
		</div>
	{/if}
</div>
