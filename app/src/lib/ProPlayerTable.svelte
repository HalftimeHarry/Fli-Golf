<script lang="ts">
	import { supabase } from '../supabaseClient';
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
			.from('professional')
			.select('full_name, male, ranking, pro_image_url, is_active, is_captain');
		if (error) {
			console.error('Error fetching professional:', error);
		} else {
			tableSimple = {
				head: ['Full Name', 'Male', 'Ranking', 'Image', 'Is Active', 'Is Captain'],
				body: tableMapperValues(data, [
					'full_name',
					'male',
					'ranking',
					'pro_image_url',
					'is_active',
					'is_captain'
				]),
				meta: tableMapperValues(data, [
					'full_name',
					'male',
					'ranking',
					'pro_image_url',
					'is_active',
					'is_captain'
				]),
				foot: ['Total', '', '', '', '', `${data.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Pro Players</h1>
	<Table source={tableSimple} />
</div>
