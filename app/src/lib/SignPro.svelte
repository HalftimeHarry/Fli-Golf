<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let today = new Date();
	const isLoading = writable(true);
	let submitting = false;
	export let campaign: Partial<App.FormModels.CampaignInput>;

	let pros: App.FormModels.GetProfessional[] = [];

	function formatDate(date) {
		const d = new Date(date);
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		const year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	let offer: Partial<App.FormModels.OfferInput> = {
		userId: '',
		campaign_type: 'sign',
		isLoading: false,
		offer_type: 'amount',
		notes: [],
		start_date: formatDate(today),
		end_date: formatDate(addDays(today, 60)), // Add a comma here
		offered: 0
	};

	onMount(async () => {
		await loadPros();
	});

	function addDays(date: Date, days: number): Date {
		let newDate = new Date(date);
		newDate.setDate(newDate.getDate() + days);
		return newDate;
	}

	async function loadPros() {
		isLoading.set(true);
		try {
			const { data, error } = await supabase.from('professional').select('id, full_name');
			console.log('Response from database:', data, error);

			if (data) {
				pros = [...data];
			} else {
				pros = [];
			}

			if (error) {
				console.error('Error loading professionals:', error);
			}
		} catch (e) {
			console.error('Unexpected error while loading professionals:', e);
		} finally {
			isLoading.set(false);
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
		{#if $isLoading}
			<p>Loading...</p>
		{:else}
			<select bind:value={offer.userId}>
				{#each pros as pro}
					<option value={pro.id}>{pro.full_name}</option>
				{/each}
			</select>
		{/if}
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
