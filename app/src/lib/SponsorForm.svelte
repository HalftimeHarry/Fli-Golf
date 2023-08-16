<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let selectedSponsorId: string | undefined;
	let sponsors: SponsorInput[] = [];
	let selectedSponsor: SponsorInput = {
		company_name: '',
		phone_number: '',
		company_url: '',
		contact_person: '',
		contact_email: ''
	};

	onMount(async () => {
		loadSponsors();
	});

	async function loadSponsors() {
		let { data, error } = await supabase
			.from<SponsorInput, Error>('sponsors')
			.select('id, company_name');
		if (error) {
			console.error('Error loading sponsors:', error);
		} else {
			sponsors = data!;
		}
	}

	async function loadSponsorDetails(sponsorId: string | undefined) {
		let { data: sponsorDetails, error } = await supabase
			.from<SponsorInput, Error>('sponsors')
			.select('*')
			.eq('id', sponsorId);

		if (error) {
			console.error('Error loading sponsor details:', error);
		} else {
			selectedSponsor = sponsorDetails![0];
		}
	}

	async function handleSubmit() {
		let { data, error } = await supabase
			.from<SponsorInput, Error>('sponsors')
			.insert([selectedSponsor]);
		if (error) {
			console.error('Error inserting data:', error);
		} else {
			console.log('Data inserted successfully:', data);
			closeOverlay();
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
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
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

		<!-- Sponsor Form -->
		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			<label class="label text-black">
				<span style="font-weight:bold;">Choose Sponsor</span>
				<select
					bind:value={selectedSponsorId}
					on:change={() => loadSponsorDetails(selectedSponsorId)}
				>
					<option value="" disabled selected>Select a sponsor</option>
					{#each sponsors as sponsor (sponsor.id)}
						<option value={sponsor.id}>{sponsor.company_name}</option>
					{/each}
				</select>
			</label>
			<label class="label text-black">
				<span style="font-weight:bold;">Company Name</span>
				<input
					class="input text-white"
					type="text"
					bind:value={selectedSponsor.company_name}
					placeholder="Enter name here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Phone Number</span>
				<input
					class="input text-white"
					type="text"
					bind:value={selectedSponsor.phone_number}
					placeholder="Enter phone number here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Company Website</span>
				<input
					class="input text-white"
					type="text"
					bind:value={selectedSponsor.company_url}
					placeholder="Enter URL here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Contact Person</span>
				<input
					class="input text-white"
					type="text"
					bind:value={selectedSponsor.contact_person}
					placeholder="Enter contact person name here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Contact Email</span>
				<input
					class="input text-white"
					type="email"
					bind:value={selectedSponsor.contact_email}
					placeholder="Enter email here..."
				/>
			</label>

			<button type="submit" class="btn mt-4 bg-red-600">Submit</button>
		</form>
	</div>
</div>
