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

	onMount(async () => {
		loadPros();
	});

	function addDays(date: Date, days: number): Date {
		let newDate = new Date(date);
		newDate.setDate(newDate.getDate() + days);
		return newDate;
	}

	async function loadPros() {
		let { data: professionals, error } = await supabase
			.from('professional')
			.select('id, full_name');
		console.log(professionals);
		if (error) {
			console.error('Error loading professionals:', error);
		} else {
			pros = professionals;
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
