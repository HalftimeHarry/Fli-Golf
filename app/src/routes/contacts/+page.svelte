<script lang="ts">
	import { overlayStore } from '../../lib/overlayStore';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition'; // import fade
	import SponsorForm from '$lib/SponsorForm.svelte';
	import VenueForm from '$lib/VenueForm.svelte';
	import ProPlayerForm from '$lib/ProPlayerForm.svelte';
	import CampaignForm from '$lib/CampaignForm.svelte';
	import ProImageUpdateForm from '$lib/ProImageUpdateForm.svelte';
	import TeamForm from '$lib/TeamForm.svelte';
	import ProDetailsUpdateForm from '$lib/ProDetailsUpdateForm.svelte';
	import Section from '$lib/SectionForm.svelte';
	import SectionContentForm from '$lib/SectionContentForm.svelte';

	let showOverlay: boolean = false;
	let selectedForm: string = '';
	const unsubscribe = overlayStore.subscribe((value) => {
		showOverlay = value;
	});

	function toggleOverlay(form: string) {
		selectedForm = form;
		overlayStore.update((value) => !value);
	}

	onDestroy(unsubscribe);
</script>

<!-- Your section with fade directives -->
<section class="bg-crimson" in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Disc golf info
		</h1>
		<p
			class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
		>
			Include info to promote disc golf
		</p>
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
			<button
				on:click={() => toggleOverlay('sponsor')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Sponsor
				<!-- ...existing SVG... -->
			</button>
			<button
				on:click={() => toggleOverlay('venue')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Venue
				<!-- ...existing SVG... -->
			</button>
			<button
				on:click={() => toggleOverlay('proplayer')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Pro Player
				<!-- ...existing SVG... -->
			</button>
			<button
				on:click={() => toggleOverlay('team')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Team
				<!-- ...You can add an SVG here too if needed... -->
			</button>
			<button
				on:click={() => toggleOverlay('proimageupdate')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Update Pro Image
				<!-- ...You can add an SVG here too if needed... -->
			</button>
			<button
				on:click={() => toggleOverlay('prodetailsupdate')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Update Pro Details
			</button>
			<button
				on:click={() => toggleOverlay('campaign')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Campaign
				<!-- ...existing SVG... -->
			</button>
			<button
				on:click={() => toggleOverlay('section')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Section
				<!-- ...existing SVG... -->
			</button>
			<button
				on:click={() => toggleOverlay('section_content')}
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Create Section Content
				<!-- ...existing SVG... -->
			</button>
		</div>
	</div>
</section>

<!-- The overlay -->
{#if showOverlay}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
		in:fade={{ duration: 700 }}
		out:fade={{ duration: 700 }}
	>
		{#if selectedForm === 'sponsor'}
			<SponsorForm />
		{:else if selectedForm === 'venue'}
			<VenueForm />
		{:else if selectedForm === 'proplayer'}
			<ProPlayerForm />
		{:else if selectedForm === 'team'}
			<TeamForm />
		{:else if selectedForm === 'proimageupdate'}
			<ProImageUpdateForm />
		{:else if selectedForm === 'campaign'}
			<CampaignForm />
		{:else if selectedForm === 'section'}
			<Section />
		{:else if selectedForm === 'section_content'}
			<SectionContentForm />
		{:else if selectedForm === 'prodetailsupdate'}
			<ProDetailsUpdateForm />
		{/if}
	</div>
{/if}
