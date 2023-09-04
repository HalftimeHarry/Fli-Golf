<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let professionals: ArrayLike<any> | null = [];
	const CDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/professionals';

	onMount(async () => {
		const { data, error } = await supabase
			.from('professional')
			.select('id, full_name, pro_image_url');
		if (error) {
			console.error(error);
		} else {
			professionals = data.filter((pro) => pro.pro_image_url);
		}
	});

	console.log(professionals);
</script>

<Accordion autocollapse class="card p-4 text-token">
	{#each professionals as pro (pro.id)}
		<AccordionItem open>
			<div slot="lead">
				<!-- Add any icon or leading content here -->
			</div>
			<div slot="summary">
				<p class="font-bold">{pro.full_name}</p>
			</div>
			<div slot="content">
				<img src={`${CDNURL}/${pro.pro_image_url}`} alt={pro.full_name} />
			</div>
		</AccordionItem>
	{/each}
</Accordion>

<style>
	/* Add any required styles for this page */
</style>
