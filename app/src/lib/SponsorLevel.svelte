<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let today = new Date();
	const isLoading = writable(true);
	let submitting = false;

	let sponsors: App.FormModels.GetSponsor[] = [];

	function formatDate(date: string | number | Date) {
		const d = new Date(date);
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		const year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	let level: Partial<App.FormModels.OfferSponsorInputLevel> = {
		campaign_id_ref_sponsor: '',
		sponsor_seleted_level: 1
	};

	onMount(async () => {
		await loadSponsors();
		await createCampaign();
	});

	export let days: number;

	function addDays(date: Date, days: number): Date {
		let newDate = new Date(date);
		newDate.setDate(newDate.getDate() + days);
		return newDate;
	}

	async function loadSponsors() {
		isLoading.set(true); // Assuming you still want to use the loading state
		try {
			const { data, error } = await supabase.rpc('get_sponsors');

			if (data) {
				sponsors = [...data];
			} else {
				sponsors = [];
			}

			if (error) {
				console.error('Error loading sponsors:', error);
			}
		} catch (e) {
			console.error('Unexpected error while loading sponsors:', e);
		} finally {
			isLoading.set(false);
		}
	}

	let campaignId = '';

	let campaign: Partial<App.FormModels.CampaignInput> = {
		userid: '',
		campaign_type: 'get_sponsor',
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

	let sponsor: App.FormModels.SponsorInput = {
		company_name: '',
		phone_number: '',
		company_url: '',
		contact_person: '',
		contact_email: ''
	};

	let offer: App.FormModels.OfferSponsorInputLevel = {
		campaign_id_ref_sponsor: '',
		sponsor_id: '',
		id: '',
		sponsor_seleted_level: 1
	};

	// ... [rest of your code]

	async function handleSubmit() {
		submitting = true;
		console.log('Campaign ID:', campaignId);

		// Construct the offer_details object
		const offer_details = {
			campaign_id_ref_sponsor: campaignId,
			sponsor_id: offer.id, // Using the offer object
			offered_level: level.sponsor_seleted_level, // Using the level object
			start_date: campaign.start_date,
			end_date: campaign.end_date
		};

		// Call the offer_level RPC instead of send_offer
		const { error } = await supabase.rpc('offer_level', { offer_details });

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
		<span style="font-weight:bold;">Company Name</span>
		<input
			class="input text-white"
			type="text"
			bind:value={sponsor.company_name}
			placeholder="Enter name here..."
		/>
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">Select Sponsor</span>
		{#if $isLoading}
			<p>Loading...</p>
		{:else}
			<select bind:value={offer.sponsor_id}>
				{#each sponsors as sponsorItem}
					<option value={sponsorItem.id}>{sponsorItem.company_name}</option>
				{/each}
			</select>
		{/if}
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">Phone Number</span>
		<input
			class="input text-white"
			type="text"
			bind:value={sponsor.phone_number}
			placeholder="Enter phone number here..."
		/>
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">Company Website</span>
		<input
			class="input text-white"
			type="text"
			bind:value={sponsor.company_url}
			placeholder="Enter URL here..."
		/>
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">Contact Person</span>
		<input
			class="input text-white"
			type="text"
			bind:value={sponsor.contact_person}
			placeholder="Enter contact person name here..."
		/>
	</label>

	<label class="label text-black">
		<span style="font-weight:bold;">Contact Email</span>
		<input
			class="input text-white"
			type="email"
			bind:value={sponsor.contact_email}
			placeholder="Enter email here..."
		/>
	</label>

	<button type="submit" class="btn mt-4 bg-red-600">Submit</button>
</form>
