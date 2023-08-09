<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import SignPro from './SignPro.svelte';
	import GetSponsorship from './GetSponsorship.svelte';
	import FindVenue from './FindVenue.svelte';

	let currentStep = 1;
	let campaign: Partial<App.FormModels.CampaignInput> = {
		campaign_type: '',
		offer_type: '',
		notes: [],
		start_date: new Date(),
		end_date: new Date(),
		target_id: ''
	};

	let submitting = false;
	let professionals = [];
	let selectedCampaignTypeLabel = '';
	let myData = { campaign_type: null }; // Or some default state

	const campaignTypes = [
		{ label: 'Sign Pro', value: 'sign_pro' },
		{ label: 'Get Sponsorship', value: 'get_sponsorship' },
		{ label: 'Find Venue', value: 'find_venue' }
	];

	$: selectedCampaignTypeLabel =
		campaignTypes.find((type) => type.value === campaign.campaign_type)?.label || '';

	async function loadProfessionals() {
		let { data, error } = await supabase.from('professional').select('*');
		if (error) {
			console.error('Error loading professionals:', error);
		} else {
			const pros = data;
		}
	}

	loadProfessionals();

	function closeOverlay() {
		setTimeout(() => {
			overlayVisible = false;
		}, 50);
	}


	function handleOutsideClick(event) {
		console.log("Clicked outside:", event.target);
		if (event.target === event.currentTarget) {
			console.log("Condition met");
			closeOverlay();  // Assuming this function closes the overlay
		}
	}

	async function handleSubmit() {
		submitting = true;

		let { error } = await supabase.from('campaign').insert([campaign]);

		if (error) {
			console.error('Error inserting data:', error);
		} else {
			console.log('Data inserted successfully');
			closeOverlay();
		}

		submitting = false;
	}

	function nextStep() {
		if (currentStep < 4) currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
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

		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			{#if currentStep === 1}
				<!-- Step 1: Choose Campaign Type -->
				<!-- Campaign Type Selection -->
				<fieldset>
					<legend class="text-lg font-semibold text-black mb-2">Select Campaign Type:</legend>
					<label class="block mb-2 text-black">
						<input type="radio" bind:group={campaign.campaign_type} value="sign_pro" />
						Sign Pro
					</label>
					<label class="block mb-2 text-black">
						<input type="radio" bind:group={campaign.campaign_type} value="money" />
						Money
					</label>
					<label class="block mb-2 text-black">
						<input type="radio" bind:group={campaign.campaign_type} value="time" />
						Time
					</label>
					<label class="block mb-2 text-black">
						<input type="radio" bind:group={campaign.campaign_type} value="use of space" />
						Use of Space
					</label>
				</fieldset>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600 text-white"
					>Next</button
				>
			{:else if currentStep === 2}
				<div on:click={handleOutsideClick} class="outside-click-container">
					<h2 class="text-xl font-bold mb-4 text-black">{selectedCampaignTypeLabel}</h2>

					{#if campaign.campaign_type === 'sign_pro'}
						<SignPro bind:campaign />
					{:else if campaign.campaign_type === 'get_sponsorship'}
						<GetSponsorship bind:campaign />
					{:else if campaign.campaign_type === 'find_venue'}
						<FindVenue bind:campaign />
					{/if}
				</div>

				<button on:click|preventDefault={prevStep} class="btn mt-4 bg-gray-600">Back</button>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600">Next</button>
			{:else if currentStep === 3}
				<!-- Step 3: Campaign Specific Details or other details -->
				<!--... Whatever else you want to display for step 3 ...-->

				<button on:click|preventDefault={prevStep} class="btn mt-4 bg-gray-600">Back</button>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600">Next</button>
			{:else if currentStep === 4}
				<!-- Step 4: Review & Submit -->
				<h2 class="text-xl font-bold mb-4 text-black">{selectedCampaignTypeLabel}</h2>
				<!--... Display a summary of the campaign data ...-->
				<!--... Rest of the buttons ...-->
			{/if}
		</form>
	</div>
</div>

<style>
.visible {
    display: block;
}
</style>
