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
			.from('venues')
			.select(
				'id, venue_name, venue_address, venue_contact, venue_email, venue_seating_capacity, created_at'
			);
		if (error) {
			console.error('Error fetching venues:', error.message, error);
		} else {
			// Assuming data is not null
			// Convert created_at timestamp to Date object and format it
			data = data.map((item) => {
				item.created_at = new Date(item.created_at).toLocaleDateString();
				return item;
			});

			tableSimple = {
				head: [
					'Name',
					'Location',
					'Contact Person',
					'Contact Email',
					'Seating Capacity',
					'Created At'
				],
				body: tableMapperValues(data, [
					'venue_name',
					'venue_address',
					'venue_contact',
					'venue_email',
					'venue_seating_capacity',
					'created_at'
				]),
				meta: tableMapperValues(data, [
					'id',
					'profile_id',
					'name',
					'location',
					'contact_person',
					'contact_email',
					'seating_capacity',
					'created_at'
				]),
				foot: ['Total', '', '', '', '', `${data.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Venues</h1>
	<Table source={tableSimple} />
</div>
