<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';

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

	const campaignTypes = [
		{ label: 'Sign Pro', value: 'sign_pro' },
		{ label: 'Get Sponsorship', value: 'get_sponsorship' },
		{ label: 'Find Venue', value: 'find_venue' }
	];

	async function loadProfessionals() {
		let { data, error } = await supabase.from('professional').select('*');
		if (error) {
			console.error('Error loading professionals:', error);
		} else {
			professionals = data;
		}
	}

	loadProfessionals();

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
				<fieldset>
					<legend class="text-lg font-semibold text-black mb-2">Select Campaign Type:</legend>
					{#each campaignTypes as type}
						<label class="block mb-2 text-black">
							<input type="radio" bind:group={campaign.campaign_type} value={type.value} />
							{type.label}
						</label>
					{/each}
				</fieldset>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600 text-white"
					>Next</button
				>
			{:else if currentStep === 2}
				<!-- Step 2: General Details -->
				<!--... Include general form fields ...-->
				<button on:click|preventDefault={prevStep} class="btn mt-4 bg-gray-600">Back</button>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600">Next</button>
			{:else if currentStep === 3}
				<!-- Step 3: Campaign Specific Details -->
				<!--... Include form fields depending on campaign.type ...-->
				<button on:click|preventDefault={prevStep} class="btn mt-4 bg-gray-600">Back</button>
				<button on:click|preventDefault={nextStep} class="btn mt-4 bg-blue-600">Next</button>
			{:else if currentStep === 4}
				<!-- Step 4: Review & Submit -->
				<!--... Display a summary of the campaign data ...-->
				<button on:click|preventDefault={prevStep} class="btn mt-4 bg-gray-600">Back</button>
				<button type="submit" class="btn mt-4 bg-red-600">Create Campaign</button>
			{/if}
		</form>
	</div>
</div>
