<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount, createEventDispatcher } from 'svelte';
	import ProImage from './ProImage.svelte';

	let player: Partial<App.FormModels.ProPlayerInput> = {
		full_name: '',
		male: true,
		ranking: undefined,
		userId: '',
		pro_image_url: ''
	};

	let submitting = false;
	let users = [];
	let url: string; // Added this declaration
	let selectedUserId: string | undefined; // Assuming this is needed based on previous context
	let feedbackType: 'success' | 'error' = 'success'; // Feedback type
	let feedbackMessage = ''; // Message to provide feedback to the user

	const dispatch = createEventDispatcher();

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

	function closeOverlay() {
		overlayStore.update((storeValue) => (storeValue = false));
	}

	function handleOutsideClick(e) {
		if (e.target === e.currentTarget) {
			closeOverlay();
		}
	}

	async function handleFormSubmission() {
		if (player.userId && url) {
			await updateProImageUrlForAdmin(player.userId, url);
		} else {
			console.error('No user selected or image URL available.');
		}
	}

	// In your Svelte component
	async function updateProImageUrlForAdmin(userId, newUrl) {
		console.log(newUrl);
		const { error } = await supabase.rpc('update_pro_image_url_for_admin', {
			user_id: userId,
			new_url: newUrl
		});

		if (error) {
			feedbackType = 'error';
			feedbackMessage = 'Error updating pro image URL';
			console.error('Error updating pro image URL: ', error);
		} else {
			feedbackType = 'success';
			feedbackMessage = 'Pro image URL updated successfully!';
			// Additional logic or actions if needed
		}
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
		<form class="modal-form" on:submit|preventDefault={handleFormSubmission}>
			<label class="label text-black">
				<span style="font-weight:bold;">User</span>
				<select bind:value={player.userId}>
					{#each users as user}
						<option value={user.id}>{user.username}</option>
					{/each}
				</select>
			</label>
			<!-- Image uploader -->
			<ProImage bind:url on:upload={(e) => (url = e.detail.url)} size={150} />
			<p class="text-black">Upload and set a new image for the selected professional.</p>

			<button type="submit" class="btn mt-4 bg-red-600">Update Image</button>
		</form>
	</div>
</div>
