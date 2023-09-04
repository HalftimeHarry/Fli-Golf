<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let tableSimple: TableSource = {
		head: [],
		body: [],
		meta: [],
		foot: []
	};

	let teamNames = {}; // To store team_id -> team_name mapping

	onMount(async () => {
		// Fetch teams
		let { data: teams, error: teamsError } = await supabase.from('teams').select('id, team_name');
		if (teamsError) {
			console.error('Error fetching teams:', teamsError);
		} else {
			teams.forEach((team) => {
				teamNames[team.id] = team.team_name; // Create a mapping of team_id to team_name
			});
		}

		// Fetch professionals
		let { data: pros, error: prosError } = await supabase
			.from('professional')
			.select('full_name, male, ranking, pro_image_url, is_active, is_captain, team_id');
		if (prosError) {
			console.error('Error fetching professional:', prosError);
		} else {
			pros = pros.map((pro) => ({
				...pro,
				team_name: teamNames[pro.team_id] || 'N/A' // Assign team name from the mapping
			}));
			tableSimple = {
				head: ['Full Name', 'Male', 'Ranking', 'Image', 'Is Active', 'Is Captain', 'Team Name'],
				body: tableMapperValues(pros, [
					'full_name',
					'male',
					'ranking',
					'pro_image_url',
					'is_active',
					'is_captain',
					'team_name'
				]),
				meta: tableMapperValues(pros, [
					'full_name',
					'male',
					'ranking',
					'pro_image_url',
					'is_active',
					'is_captain',
					'team_name'
				]),
				foot: ['Total', '', '', '', '', '', `${pros.length}`]
			};
		}
	});
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4 text-white">Pro Players</h1>
	<Table source={tableSimple} />
</div>
