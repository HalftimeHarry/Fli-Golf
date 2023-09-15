<script lang="ts">
	import { onMount } from 'svelte'; // <-- Add this import
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import type { VenueInput } from '../app';
	import VenueImage from './VenueImage.svelte';

	let venue: Partial<VenueInput> = {
		userId: '',
		venue_name: '',
		venue_address: '',
		venue_image_url: '',
		venue_contact: '',
		venue_email: ''
	};

	let submitting = false;
	let users = [];

	onMount(async () => {
		loadUsers();
	});

	async function loadUsers() {
		let { data, error } = await supabase.rpc('get_venue_users_profiles');
		if (error) {
			console.error('Error loading users:', error);
		} else {
			users = data;
		}
	}

	async function loadVenueName(userId: string | undefined) {
		let { data: profiles, error } = await supabase
			.from('profiles')
			.select('username')
			.eq('id', userId);

		if (error) {
			console.error('Error loading venue name:', error);
		} else {
			return profiles?.[0].username;
		}
	}

	function closeOverlay() {
		overlayStore.set(false);
	}

	function handleOutsideClick(e) {
		if (
			e.target === e.currentTarget ||
			e.key === 'Escape' ||
			e.target.closest('button.close-overlay-button')
		) {
			closeOverlay();
		}
	}

	async function handleSubmit() {
		submitting = true;

		let venueName = await loadVenueName(venue.userId);

		let { error } = await supabase.rpc('create_venue', {
			venue_name: venueName,
			venue_address: venue.venue_address, // <-- Updated to match the correct field
			venue_image_url: venue.venue_image_url,
			venue_email: venue.venue_email,
			venue_contact: venue.venue_contact
		});

		if (error) {
			console.error('Error inserting venue:', error);
			// handle error appropriately, e.g., show a user-friendly message
		} else {
			console.log('Venue added successfully');
			closeOverlay();
		}

		submitting = false;
	}
</script>

<div
	class="mt-24 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000 pointer-events-auto"
	on:click={handleOutsideClick}
	on:keydown={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full shadow-lg">
		<button
			class="close-overlay-button absolute top-2 right-2 text-gray-700 hover:text-gray-900 focus:outline-none"
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
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<!-- Venue Form -->
		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			<label class="block text-black font-semibold">
				Venue User
				<select bind:value={venue.userId}>
					{#each users as user}
						<option value={user.id}>{user.username}</option>
					{/each}
				</select>
			</label>

			<label class="block text-black font-semibold">
				Venue Name
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={venue.venue_address}
					placeholder="Enter venue name..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Location
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={venue.venue_address}
					placeholder="Enter venue location..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Contact Person
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={venue.venue_contact}
					placeholder="Enter contact person name..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Contact Email
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="email"
					bind:value={venue.venue_email}
					placeholder="Enter contact email..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Upload Venue Image
				<VenueImage bind:url={venue.venue_image_url} size={150} />
			</label>

			<button
				type="submit"
				class="w-full py-2 mt-4 bg-red-600 rounded text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
			>
				Submit
			</button>
		</form>
	</div>
</div>
