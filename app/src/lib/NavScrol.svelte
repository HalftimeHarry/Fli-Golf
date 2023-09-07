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

<div class="container mx-auto p-4 border-t border-white z-10">
	<div class="top-row flex flex-row space-x-4 mb-8 justify-between">
		<a href="schedule" class="hover:underline">Schedule</a>
		<a href="players" class="hover:underline">Players</a>
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
</div>
