<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let today = new Date();

	let submitting = false;
	let pros: App.FormModels.GetProfessional[] = [];
	let offer: Partial<App.FormModels.OfferInput> = {
		userId: '',
		campaign_type: 'sign',
		offer_type: 'amount',
		notes: [],
		start_date: today,
		end_date: addDays(today, 60),
		offered: 0
	};

	onMount(() => {
		loadPros();
	});

	$: if (pros && pros.length) {
		console.log(pros);
	}

	function addDays(date: Date, days: number): Date {
		let newDate = new Date(date);
		newDate.setDate(newDate.getDate() + days);
		return newDate;
	}

	async function loadPros() {
		try {
			// Fetch professionals from the database
			const { data, error } = await supabase.from('professional').select('id, full_name');

			if (error) {
				console.error('Error loading professionals:', error);
				pros = []; // Reset to an empty array in case of error
			} else {
				// Safely set 'pros' with the fetched data or default to an empty array
				pros = data ? [...data] : [];
			}
		} catch (e) {
			// Handle unexpected errors
			console.error('Unexpected error while loading professionals:', e);
			pros = []; // Reset to an empty array in case of unexpected errors

		}
	}

	async function handleSubmit() {
		submitting = true;
		let { error } = await supabase.rpc('send_offer', offer);

		if (error) {
			console.error('Error sending offer:', error);
		} else {
			console.log('Offer sent successfully');
			closeOverlay();
		}
		submitting = false;
	}

	function closeOverlay() {
		throw new Error('Function not implemented.');
	}
</script>

<!-- Form -->
<form class="modal-form" on:submit|preventDefault={handleSubmit}>
	<label class="label text-black">
		<span style="font-weight:bold;">Pro</span>
		<select bind:value={offer.userId}>
			{#each pros as pro}
				<option value={pro.id}>{pro.full_name}</option>
			{/each}
		</select>
	</label>
	<!-- Offered Amount -->
	<label class="label text-black">
		<span style="font-weight:bold;">Offered Amount</span>
		<input type="number" bind:value={offer.offered} min="0" />
	</label>

	<!-- Start and End Dates -->
	<label class="label text-black">
		<span style="font-weight:bold;">Start Date</span>
		<input type="date" bind:value={offer.start_date} />
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">End Date</span>
		<input type="date" bind:value={offer.end_date} />
	</label>

	<button type="submit" class="btn mt-4 bg-red-600">Send Offer</button>
</form>
