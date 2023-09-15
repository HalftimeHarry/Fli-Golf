<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let teams: ArrayLike<any> | null = [];
	const CDNURL = 'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/teams';
	const TeamCDNURL =
		'https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars';

	onMount(async () => {
		const { data, error } = await supabase
			.from('teams') // Ensure you use the correct table name here
			.select('id, team_name, team_image_url'); // Update 'relatedTableName' to the correct related table name and (*) fetches all columns of that related table.
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
			<div slot="content" class="flex items-center space-x-4">
				{#if team.team_image_url}
					<img
						src={`${TeamCDNURL}/${team.team_image_url}`}
						alt={`${team.team_name}`}
						class="w-24 h-auto"
					/>
				{/if}
				{#if team.team_id && team.team_id.team_image_url}
					<img
						src={`${CDNURL}/${team.team_id.team_image_url}`}
						alt={`${team.team_name} Team`}
						class="w-24 h-auto"
					/>
				{/if}
			</div>
		</AccordionItem>
	{/each}
</Accordion>

<style>
	/* Add any required styles for this page */
</style>
