<script lang="ts">
	import { supabase } from '/workspace/Fli-Golf/app/src/supabaseClient';
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
			.from('sponsors')
			.select('id, company_name, company_url, contact_person, contact_email, created_at');
		if (error) {
			console.error('Error fetching sponsors:', error);
		} else {
			// Assuming data is not null
			// Convert created_at timestamp to Date object and format it
			data = data.map((item) => {
				item.created_at = new Date(item.created_at).toLocaleDateString();
				return item;
			});

			tableSimple = {
				head: ['Company Name', 'Company URL', 'Contact Person', 'Contact Email', 'Created At'],
				body: tableMapperValues(data, [
					'company_name',
					'company_url',
					'contact_person',
					'contact_email',
					'created_at'
				]),
				meta: tableMapperValues(data, [
					'id',
					'company_name',
					'company_url',
					'contact_person',
					'contact_email',
					'created_at'
				]),
				foot: ['Total', '', '', '', `${data.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Sponsors</h1>
	<Table source={tableSimple} />
</div>
