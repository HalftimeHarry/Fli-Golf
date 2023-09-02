<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount, createEventDispatcher } from 'svelte';

	interface ProDetailUpdate {
		id?: string;
		is_active?: boolean;
		is_captain?: boolean;
		team_id?: string | null;
	}

	let proDetail: ProDetailUpdate = {
		is_active: true
	};
	let teams = [];
	let users = [];
	let feedbackType: 'success' | 'error' = 'success';
	let feedbackMessage = '';

	const dispatch = createEventDispatcher();

	onMount(async () => {
		loadTeams();
		loadUsers();
	});

	async function loadTeams() {
		let { data: teamsData, error } = await supabase.from('teams').select('id, team_name');

		if (error) {
			console.error('Error fetching teams:', error);
		} else {
			teams = teamsData;
		}
	}

	async function loadUsers() {
		let { data, error } = await supabase.rpc('get_professional_users_profiles');
		if (error) {
			console.error('Error loading users:', error);
		} else {
			users = data;
		}
	}

	function closeOverlay() {
		overlayStore.update((storeValue) => (storeValue = false));
	}

	function handleOutsideClick(e) {
		if (e.target === e.currentTarget) {
			closeOverlay();
		}
	}

    async function handleFormSubmission() {
        if (proDetail.id) {
            const { data, error } = await supabase
                .from('professional')
                .update(proDetail)
                .eq('id', proDetail.id); 
            if (error) {
                console.error('Error updating data:', error);
            } else {
                console.log('Data updated successfully:', data);
                closeOverlay();  // Close the overlay after successful update
            }
        } else {
            console.error('proDetail.id is undefined!');
        }
    }
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full">
		<button
			class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900"
			type="button"
			on:click={closeOverlay}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<form on:submit|preventDefault={handleFormSubmission}>
			<label class="label text-black">
				<span style="font-weight:bold;">Pro</span>
				<select bind:value={proDetail.id}>
					{#each users as user}
						<option value={user.id}>{user.username}</option>
					{/each}
				</select>
			</label>
			<label class="label text-black">
				<span style="font-weight:bold;">Is Active</span>
				<input type="checkbox" bind:checked={proDetail.is_active} />
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Is Captain</span>
				<input type="checkbox" bind:checked={proDetail.is_captain} />
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Team</span>
				<select bind:value={proDetail.team_id}>
					<option value={null}>Select a Team</option>
					{#each teams as team (team.id)}
						<option value={team.id}>{team.team_name}</option>
					{/each}
				</select>
			</label>

			<button type="submit" class="btn mt-4 bg-red-600">Update</button>
		</form>
	</div>
</div>
