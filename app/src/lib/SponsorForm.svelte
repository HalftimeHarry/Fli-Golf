<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { SponsorInput } from '../app';
	import SponsorImage from './SponsorImage.svelte';

	let sponsor: Partial<SponsorInput> = {
		userId: '',
		company_name: '',
		contact_person: '',
		phone_number: '',
		contact_email: '',
		company_website: '',
		level: '',
		sponsor_logo_url: ''
	};

	let submitting = false;
	let users = [];

	onMount(async () => {
		loadUsers();
	});

	async function loadUsers() {
		let { data, error } = await supabase.rpc('get_sponsor_users_profiles');
		if (data) {
			users = data;
		}
	}

	async function loadCompanyName(userId: string | undefined) {
		let { data: profiles, error } = await supabase
			.from('profiles')
			.select('username')
			.eq('id', userId);

		if (error) {
			console.error('Error loading company name:', error);
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
		let companyName = await loadCompanyName(sponsor.userId);

		let { error } = await supabase.rpc('create_sponsor', {
			id: sponsor.userId,
			company_name: companyName,
			contact_person: sponsor.contact_person,
			phone_number: sponsor.phone_number,
			level: sponsor.level,
			sponsor_logo_url: sponsor.sponsor_logo_url
		});

		if (error) {
			console.error('Error inserting data:', error);
		} else {
			console.log('Sponsor added successfully');
			closeOverlay();
		}

		submitting = false;
	}
</script>

<div
	class="mt-24 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
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

		<!-- Sponsor Form -->
		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			<!-- User (linked with Sponsor) -->
			<label class="block text-black font-semibold">
				Sponsor
				<select
					bind:value={sponsor.userId}
					class="mt-1 w-full p-2 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				>
					<option value="">Select a sponsor</option>
					{#each users as user}
						<option value={user.id}>{user.username}</option>
					{/each}
				</select>
			</label>

			<label class="block text-black font-semibold">
				Contact Person
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={sponsor.contact_person}
					placeholder="Enter contact person's name here..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Phone Number
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="tel"
					bind:value={sponsor.phone_number}
					placeholder="Enter phone number here..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Website
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={sponsor.website}
					placeholder="Enter phone number here..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Level
				<input
					class="mt-1 w-full p-2 text-black border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					type="text"
					bind:value={sponsor.level}
					placeholder="Enter phone number here..."
				/>
			</label>

			<label class="block text-black font-semibold">
				Sponsor Logo
				<SponsorImage bind:url={sponsor.sponsor_logo_url} size={150} />
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
