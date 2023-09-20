<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../../supabaseClient';

	let tournament_results = [];
	let error;

	onMount(async () => {
		const { data: resultsData, error: resultsError } = await supabase.from('tournament_results')
			.select(`
        *, 
        tournaments(tournament_name) 
    `);

		if (resultsError) {
			error = resultsError;
			return;
		}

		if (resultsData) {
			const teamIds = [...new Set(resultsData.map((result) => result.team_id))];
			const { data: teamsData, error: teamsError } = await supabase
				.from('teams')
				.select('id, team_name')
				.in('id', teamIds);

			if (teamsError) {
				error = teamsError;
				return;
			}

			const teamMap = {};
			teamsData.forEach((team) => {
				teamMap[team.id] = team.team_name; // Use 'team_name' if that's the column name
			});

			tournament_results = resultsData.map((result) => ({
				...result,
				teamName: teamMap[result.team_id],
				tournamentName: result.tournaments.tournament_name
			}));
		}
	});
</script>

{#if error}
	<p>Error: {error.message}</p>
{:else}
	<h2>Tournament Leaderboard</h2>

	<table class="min-w-full divide-y divide-gray-200 text-black">
		<thead>
			<tr>
				<th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
					Position
				</th>
				<th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
					Tournament Name
				</th>
				<th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
					Team Name
				</th>
				<th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
					Score
				</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-black">
			{#each tournament_results as result (result.result_id)}
				<tr>
					<td class="px-6 py-4 whitespace-nowrap">
						{result.position}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						{result.tournamentName}
						<!-- Displaying the tournament name -->
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						{result.teamName}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						{result.score}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
