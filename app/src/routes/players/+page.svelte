<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let professionals: ArrayLike<any> | null = [];
	const CDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/professionals';
	const TeamCDNURL =
		'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars';

	onMount(async () => {
		const { data, error } = await supabase
			.from('professional')
			.select('id, full_name, ranking, pro_image_url, team_id(team_image_url)');
		if (error) {
			console.error(error);
		} else {
			professionals = data;
			console.log(professionals);
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
				<p class="font-bold text-green-400">{pro.full_name}</p>
			</div>
			<div slot="content" class="flex items-center space-x-4">
				{#if pro.pro_image_url}
					<img
						src={`${CDNURL}/${pro.pro_image_url}`}
						alt={`${pro.full_name}`}
						class="w-24 h-auto rounded-lg"
					/>
				{/if}
				<p class="font-bold text-green-400">{pro.ranking}</p>
				{#if pro.team_id && pro.team_id.team_image_url}
					<img
						src={`${TeamCDNURL}/${pro.team_id.team_image_url}`}
						alt={`${pro.full_name} Team`}
						class="w-34 h-24 rounded-lg"
					/>
				{/if}
			</div>
		</AccordionItem>
	{/each}
</Accordion>

<style>
	/* Add any required styles for this page */
</style>
