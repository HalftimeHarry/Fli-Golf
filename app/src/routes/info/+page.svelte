<!-- src/routes/info/+page.svelte -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let sec_images: ArrayLike<any> | null = [];
	const CDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/section_images';
	let openSections: { [key: string]: boolean } = {};

	onMount(async () => {
		const { data, error } = await supabase
			.from('section_contents')
			.select('id, subtitle, description, image_url, section_id(title, "order")')
			.order('"order"', { ascending: true });

		if (error) {
			console.error(error);
		} else {
			const sectionsGrouped: { [key: string]: any[] } = {};

			data.forEach((item) => {
				if (sectionsGrouped[item.section_id.title]) {
					sectionsGrouped[item.section_id.title].push(item);
				} else {
					sectionsGrouped[item.section_id.title] = [item];
				}
			});

			sec_images = sectionsGrouped;
		}
	});

	function toggleSection(sectionTitle: string) {
		openSections[sectionTitle] = !openSections[sectionTitle];
	}
</script>

<Accordion class="card p-4 text-token">
	{#each Object.keys(sec_images).sort((a, b) => {
		return sec_images[a][0].section_id.order - sec_images[b][0].section_id.order;
	}) as sectionTitle}
		<AccordionItem open={openSections[sectionTitle]}>
			<div slot="lead">
				<!-- Add any icon or leading content here -->
			</div>
			<div slot="summary" on:click={() => toggleSection(sectionTitle)}>
				<p class="font-bold text-blue-400">{sectionTitle}</p>
			</div>
			<div slot="content" class="flex items-center flex-col space-y-4">
				{#each sec_images[sectionTitle] as image}
					{#if image.image_url}
						<img
							src={`${CDNURL}/${image.image_url}`}
							alt={`${image.subtitle}`}
							class="w-24 h-auto"
						/>
					{/if}
					<p class="font-bold text text-red-500">{image.subtitle}</p>
					<p>{image.description}</p>
				{/each}
			</div>
		</AccordionItem>
	{/each}
</Accordion>
