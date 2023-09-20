<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { supabase } from '../../supabaseClient';
	import { onMount } from 'svelte';

	let professionals = {};
	let openProfessionals: { [key: string]: boolean } = {};
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
			data.forEach((pro) => {
				professionals[pro.id] = pro;
			});
		}
	});

	function toggleProfessional(proId: string) {
		openProfessionals[proId] = !openProfessionals[proId];
	}
</script>

<Accordion autocollapse class="card p-4 text-token">
	{#each Object.keys(professionals) as proId}
		<AccordionItem open={openProfessionals[proId]}>
			<div slot="lead">
				<!-- Add any icon or leading content here -->
			</div>
			<div slot="summary" on:click={() => toggleProfessional(proId)}>
				<p class="font-bold text-green-400">{professionals[proId].full_name}</p>
			</div>
			<div slot="content" class="card">
				{#if professionals[proId].pro_image_url}
					<img
						src={`${CDNURL}/${professionals[proId].pro_image_url}`}
						alt={`${professionals[proId].full_name}`}
						class="card-image w-24 h-auto rounded-lg mt-4"
					/>
				{/if}
				<div class="card-content bg-slate-500 rounded-lg w-full">
					<p class="font-bold text-black">Ranked {professionals[proId].ranking}</p>
					<p class="font-bold text-black">Member of</p>
					{#if professionals[proId].team_id && professionals[proId].team_id.team_image_url}
						<img
							src={`${TeamCDNURL}/${professionals[proId].team_id.team_image_url}`}
							alt={`${professionals[proId].full_name} Team`}
							class="card-team-image w-34 h-24 rounded-lg"
						/>
					{/if}
				</div>
			</div>
		</AccordionItem>
	{/each}
</Accordion>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #d1d1d1; /* darker grey */
		width: 300px; /* adjust based on your needs */
		margin: 20px; /* adjust based on your needs */
	}

	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.card-image {
		margin-bottom: 20px;
	}

	.card-team-image {
		margin-top: 10px;
	}
</style>
