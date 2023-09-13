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

	function mapDataToImageTable(data, columns) {
		return data.map((item) => {
			let row = {};
			columns.forEach((col) => {
				if (col === 'sponsor_logo_url') {
					row[col] = `<img src="${item[col]}" alt="Sponsor Logo" width="50">`;
				} else {
					row[col] = item[col];
				}
			});
			return row;
		});
	}

	onMount(async () => {
		// ... your existing fetch logic ...

		let { data, error } = await supabase
			.from('sponsors')
			.select(
				'id, company_name, company_url, contact_person, contact_email, created_at, is_sponsoring, sponsor_logo_url, level'
			);
		if (error) {
			console.error('Error fetching sponsors:', error);
		} else {
			// Assuming data is not null
			tableSimple = {
				head: [
					'Company Name',
					'Company URL',
					'Contact Person',
					'Contact Email',
					'Created At',
					'Is Sponsoring',
					'Sponsor Logo',
					'Level'
				],
				body: mapDataToImageTable(data, [
					'company_name',
					'company_url',
					'contact_person',
					'contact_email',
					'created_at',
					'is_sponsoring',
					'sponsor_logo_url',
					'level'
				]),
				meta: mapDataToImageTable(data, [
					'id',
					'company_name',
					'company_url',
					'contact_person',
					'contact_email',
					'created_at',
					'is_sponsoring',
					'sponsor_logo_url',
					'level'
				]),
				foot: ['Total', '', '', '', '', '', '', `${data.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Sponsors</h1>
	<Table source={tableSimple} />
</div>
