<script lang="ts">
	import { supabase } from '/workspace/FliDiscGolf/app/src/supabaseClient';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let tableSimple: TableSource = {
		head: [],
		body: [],
		meta: [],
		foot: []
	};

	onMount(async () => {
		let { data, error } = await supabase
			.from('pro_players')
			.select('profile_id, full_name, game_name, game_ranking');
		if (error) {
			console.error('Error fetching pro_players:', error);
		} else {
			// Assuming data is not null
			tableSimple = {
				head: ['Profile ID', 'Full Name', 'Game Name', 'Game Ranking'],
				body: tableMapperValues(data, ['profile_id', 'full_name', 'game_name', 'game_ranking']),
				meta: tableMapperValues(data, ['profile_id', 'full_name', 'game_name', 'game_ranking']),
				foot: ['Total', '', '', `${data.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Pro Players</h1>
	<Table source={tableSimple} />
</div>
