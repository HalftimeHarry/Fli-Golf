<!-- +page.svelte -->
<script context="module" lang="ts">
	import { fetchRankings } from '/workspace/Fli-Golf/app/src/routes/rank/rank.json';
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let player;

	onMount(async () => {
		try {
			const playerData = await fetchRankings();
			player = playerData; // Update the component state with the fetched data
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div class="flex">
	<div class="grid justify-items-center mt-8 flex-grow">
		<h2>Player Name: {player ? player.name : 'N/A'}</h2>
	</div>
</div>
