<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let player: Partial<App.FormModels.ProPlayerInput> = {
		full_name: '',
		male: true,
		ranking: undefined,
		id: ''
	};

	let submitting = false;
	let users = [];

	onMount(async () => {
		loadUsers();
	});

	async function loadUsers() {
		let { data, error } = await supabase.rpc('get_professional_users_profiles');
		if (error) {
			console.error('Error loading users:', error);
		} else {
			users = data;
		}
	}

	async function loadUserName(userId) {
		let { data: profiles, error } = await supabase
			.from('profiles')
			.select('username')
			.eq('id', userId);

		if (error) {
			console.error('Error loading username:', error);
		} else {
			return profiles[0].username;
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

	async function handleSubmit() {
		submitting = true;

		// Fetch the username for the selected user
		let username = await loadUserName(player.userId);

		console.log(username);

		// Create a new ProPlayer
		let { error: insertError } = await supabase.rpc('create_pro_player', {
			full_name: username,
			male: player.male,
			ranking: player.ranking,
			id: player.userId // Use the UUID from the user selected in the form
		});

		if (insertError) {
			console.error('Error inserting data:', insertError);
		} else {
			console.log('Data inserted successfully');
			closeOverlay();
		}

		submitting = false;
	}
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
	on:keydown={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full">
		<!-- Close button -->
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

		<!-- Form -->
		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			<label class="label text-black">
				<span style="font-weight:bold;">User</span>
				<select bind:value={player.userId}>
					{#each users as user}
						<option value={user.id}>{user.username}</option>
					{/each}
				</select>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Game Ranking</span>
				<input
					class="input text-white"
					type="number"
					bind:value={player.ranking}
					placeholder="Enter game ranking here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Male</span>
				<input type="checkbox" bind:checked={player.male} />
			</label>

			<button type="submit" class="btn mt-4 bg-red-600">Submit</button>
		</form>
	</div>
</div>
