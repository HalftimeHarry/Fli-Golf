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
			<div slot="content" class="card">
				{#if pro.pro_image_url}
					<img
						src={`${CDNURL}/${pro.pro_image_url}`}
						alt={`${pro.full_name}`}
						class="card-image w-24 h-auto rounded-lg"
					/>
				{/if}
				<div class="card-content">
					<p class="font-bold text-black">Ranked {pro.ranking}</p>
					<p class="font-bold text-black">Member of</p>
					{#if pro.team_id && pro.team_id.team_image_url}
						<img
							src={`${TeamCDNURL}/${pro.team_id.team_image_url}`}
							alt={`${pro.full_name} Team`}
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
		padding: 20px;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #ffffff;
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
