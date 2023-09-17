<script>
	import VegasPopUp from './VegasPopUp.svelte';
	import { onMount } from 'svelte';
	import { overlayStore } from '../lib/overlayStore';

	let continuousText = '... Placeholder text for the ticker...';
	const ScrollSpeed = 100;
	const ScrollChars = 1;

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function scrollMarquee() {
		continuousText =
			continuousText.substring(ScrollChars) + continuousText.substring(0, ScrollChars);
		setTimeout(scrollMarquee, ScrollSpeed);
	}

	onMount(() => {
		scrollMarquee();
	});

	function toggleVegasPopUp() {
		if ($overlayStore === 'vegas') {
			overlayStore.set('');
		} else {
			overlayStore.set('vegas');
		}
	}

	function closeVegasPopUp() {
		overlayStore.set('');
	}
</script>

<div class="container mx-auto p-4 border-t border-white z-10">
	<div class="top-row flex flex-row space-x-4 mb-8 justify-between md:justify-start">
		<!-- Hamburger Menu (visible on small screens) -->
		<button class="md:hidden p-2 mr-4" on:click={toggleMenu}> ☰ </button>

		<!-- Main Menu Links -->
		<div class={`space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
			<a href="schedule" class="hover:underline">Schedule</a>
			<a href="players" class="hover:underline">Players</a>
			<a href="teams" class="hover:underline">Teams</a>
			<a href="sponsors" class="hover:underline">Sponsors</a>
			<a href="venues" class="hover:underline">Venues</a>
			<a href="#" class="hover:underline">Standings</a>
			<a href="#" class="hover:underline">Fantasy</a>
			<a href="#" class="hover:underline">Statistics</a>
			<a href="#" class="hover:underline">Leaderboard</a>
			<a href="#" class="hover:underline">Where to Watch</a>
			<a href="info" class="hover:underline">Info</a>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
				on:click={toggleVegasPopUp}
			>
				Vegas
			</button>
		</div>
		{#if $overlayStore === 'vegas'}
			<VegasPopUp on:close={closeVegasPopUp} />
		{/if}
	</div>
</div>
