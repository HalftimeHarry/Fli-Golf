<script>
	import { onMount } from 'svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	let sections = [];

	onMount(async () => {
		// Fetch sections and their corresponding content from the API
		const response = await fetch('/api/sections');
		sections = await response.json();
	});
</script>

<div class="container mx-auto px-4 py-6">
	<Accordion multi>
		{#each sections as section}
			<AccordionItem title={section.title}>
				<div class="section mb-6">
					<h2 class="text-2xl font-bold mb-4">{section.title}</h2>
					{#each section.contents as content}
						<div class="content mb-4 border p-4 rounded">
							{#if content.subtitle}
								<h3 class="text-xl mb-2">{content.subtitle}</h3>
							{/if}
							<p class="mb-2">{content.description}</p>
							{#if content.image_url}
								<img
									src={content.image_url}
									alt={content.subtitle || content.description}
									class="w-full rounded mt-2"
								/>
							{/if}
						</div>
					{/each}
				</div>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
