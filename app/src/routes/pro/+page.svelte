<script>
	import ProPlayerTable from '../../lib/ProPlayerTable.svelte'; // Ensure the path is correct
	import { fade } from 'svelte/transition';

	let showProPlayersTable = true;
</script>

<div class="container mx-auto px-4 mt-16 ml-24">
	{#if showProPlayersTable}
		<div in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
			<ProPlayerTable />
		</div>
	{/if}
</div>
