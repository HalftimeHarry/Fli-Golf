<!-- src/routes/info/+page.svelte -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let sec_images: ArrayLike<any> | null = [];
	const CDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/section_images';

	onMount(async () => {
		const { data, error } = await supabase
			.from('section_contents')
			.select('id, subtitle, description, image_url, section_id(title)')
			.order('"order"', { ascending: true });

		if (error) {
			console.error(error);
		} else {
			sec_images = data;
			console.log(sec_images);
		}
	});
</script>

<Accordion autocollapse class="card p-4 text-token">
	{#each sec_images as image (image.id)}
		<AccordionItem open>
			<div slot="lead">
				<!-- Add any icon or leading content here -->
			</div>
			<div slot="summary">
				<p class="font-bold">{image.section_id.title}</p>
				<!-- Display the title from sections table here -->
			</div>
			<div slot="content" class="flex items-center flex-col space-y-4">
				<p class="font-bold">{image.subtitle}</p>
				<p>{image.description}</p>
				{#if image.image_url}
					<img src={`${CDNURL}/${image.image_url}`} alt={`${image.subtitle}`} class="w-24 h-auto" />
				{/if}
			</div>
		</AccordionItem>
	{/each}
</Accordion>
