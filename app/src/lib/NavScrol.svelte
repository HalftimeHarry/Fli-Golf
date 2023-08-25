<script>
	let continuousText = '... Placeholder text for the ticker...'; // example text
	const ScrollSpeed = 100;
	const ScrollChars = 1;

	function scrollMarquee() {
		continuousText =
			continuousText.substring(ScrollChars) + continuousText.substring(0, ScrollChars);
		setTimeout(scrollMarquee, ScrollSpeed);
	}

	import { onMount } from 'svelte';
	onMount(() => {
		scrollMarquee();
	});
</script>

<div class="container mx-auto p-4 border-t border-white">
	<div class="top-row flex flex-row space-x-4 mb-4 justify-between">
		<a href="schedule" class="hover:underline">Schedule</a>
		<a href="#" class="hover:underline">Players</a>
		<a href="#" class="hover:underline">Teams</a>
		<a href="#" class="hover:underline">News</a>
		<a href="#" class="hover:underline">Video</a>
		<a href="#" class="hover:underline">Standings</a>
		<a href="#" class="hover:underline">Fantasy</a>
		<a href="#" class="hover:underline">Statistics</a>
		<a href="#" class="hover:underline">Leaderboard</a>
		<a href="#" class="hover:underline">Where to Watch</a>
		<a href="#" class="hover:underline">Team Picker</a>
		<a href="#" class="hover:underline">Teams</a>
	</div>
	<div class="container mx-auto w-full p-4 border-t border-white">
		<div class="flex w-full">
			<div
				class="flex-none w-64 h-14 bg-green-500 relative z-10 flex items-center justify-center text uppercase"
			>
				Next Tournament
			</div>
			<div
				class="flex-grow ticker-wrapper relative overflow-hidden flex items-center justify-center"
			>
				<input readonly bind:value={continuousText} class="w-full border-none bg-transparent" />
			</div>
			<div class="flex-initial w-auto relative z-10 flex items-center justify-start space-x-4">
				<button class="w-auto py-2 px-4 bg-blue-500 text-white hover:bg-blue-600">
					MORE INFO <i class="fas fa-arrow-right text-white" />
				</button>
				<button class="w-auto py-2 px-4 bg-blue-500 text-white hover:bg-blue-600">
					ATTEND EVENT <i class="fas fa-arrow-right text-white" />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	/* Additional styles */
	.ticker-wrapper {
		position: relative;
	}
	input {
		font-family: inherit; /* Make input text look like regular text */
		font-size: inherit; /* Make input text look like regular text */
	}
</style>
