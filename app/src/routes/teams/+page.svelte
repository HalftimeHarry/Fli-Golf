<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let teams: ArrayLike<any> | null = [];
	const TeamCDNURL =
		'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars';
	const ProCDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/professionals';

	onMount(async () => {
		const { data, error } = await supabase
			.from('teams') 
			.select('id, team_name, team_image_url, professional(pro_image_url)'); // Fetch the team's information along with associated professionals' images.
		if (error) {
			console.error(error);
		} else {
			teams = data;
			console.log(teams);
		}
	});

	console.log(teams);
</script>

<Accordion autocollapse class="card p-4 text-token">
	{#each teams as team (team.id)}
		<AccordionItem open>
			<div slot="lead">
				<!-- Add any icon or leading content here -->
			</div>
			<div slot="summary">
				<p class="font-bold">{team.team_name}</p>
			</div>
			<div slot="content" class="flex flex-wrap items-center space-x-4">
				{#if team.team_image_url}
					<img
						src={`${TeamCDNURL}/${team.team_image_url}`}
						alt={`${team.team_name}`}
						class="w-24 h-24 rounded-lg"
					/>
				{/if}
				
				{#each team.professional as pro}
					{#if pro.pro_image_url}
						<img
							src={`${ProCDNURL}/${pro.pro_image_url}`}
							alt={`${pro.full_name}`}
							class="w-24 h-24 rounded-lg"
						/>
					{/if}
				{/each}
			</div>
		</AccordionItem>
	{/each}
</Accordion>

<style>
	/* Add any required styles for this page */
</style>
