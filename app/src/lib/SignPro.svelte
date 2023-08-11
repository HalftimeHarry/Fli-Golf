<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let today = new Date();
	const isLoading = writable(true);
	let submitting = false;

	let pros: App.FormModels.GetProfessional[] = [];

	function formatDate(date: string | number | Date) {
		const d = new Date(date);
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		const year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	let offer: Partial<App.FormModels.OfferInput> = {
		campaign_id_ref_pro: '',
		offered: 0
	};

	onMount(async () => {
		await loadPros();
		await createCampaign();
	});

	export let days: number;

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

	let campaignId = '';

	let campaign: Partial<App.FormModels.CampaignInput> = {
		userid: '',
		campaign_type: 'sign',
		offer_type: 'amount',
		notes: [],
		start_date: formatDate(today),
		end_date: formatDate(addDays(today, days))
	};

	async function createCampaign() {
		const { data, error } = await supabase.rpc('create_campaign', {
			campaign_type_param: campaign.campaign_type,
			offer_type_param: campaign.offer_type,
			notes_param: campaign.notes,
			start_date_param: campaign.start_date,
			end_date_param: campaign.end_date
		});

		if (error) {
			console.error('Error creating campaign:', error);
			return;
		}
		console.log('Returned UUID from create_campaign:', data);
		campaignId = data;
	}

	async function handleSubmit() {
		submitting = true;
		console.log('Campaign ID:', campaignId);
		// Construct the correct offer_details object
		const offer_details = {
			campaign_id_ref_pro: campaignId, // Use the campaignId variable
			professional_id: offer.id,
			offered: offer.offered,
			start_date: campaign.start_date,
			end_date: campaign.end_date
		};

		let { error } = await supabase.rpc('send_offer', { offer_details });

		if (error) {
			console.error('Error sending offer:', error);
		} else {
			console.log('Offer sent successfully');
			closeOverlay();
		}
		submitting = false;
	}

	function closeOverlay() {
		overlayStore.set(false); // Close the overlay by setting the store value to false
	}
</script>

<!-- Form -->
<form class="modal-form" on:submit|preventDefault={handleSubmit}>
	<label class="label text-black">
		<span style="font-weight:bold;">Pro</span>
		{#if $isLoading}
			<p>Loading...</p>
		{:else}
			<select bind:value={offer.id}>
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

	<button type="submit" class="btn mt-4 bg-red-600" disabled={submitting}>
		{submitting ? 'Sending...' : 'Send Offer'}
	</button>
</form>
