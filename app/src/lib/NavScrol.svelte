<script>
	import { onMount } from 'svelte';

	let fixedEnd;
	let scrollingList;
	let fixedStart;

	onMount(() => {
		const fixedStartRight = fixedStart.getBoundingClientRect().left;
		const fixedEndWidth = fixedEnd.getBoundingClientRect().width;
		const scrollingWidth = scrollingList.scrollWidth;

		// Calculate the total distance the scrolling list should travel.
		const distanceToTravel = fixedStartRight + scrollingWidth - fixedEndWidth;

		// Set the distance and initial translation as CSS variables on the scrolling list.
		scrollingList.style.setProperty('--distance', `${distanceToTravel}px`);
		scrollingList.style.setProperty('--fixedEndWidth', `${fixedEndWidth}px`);

		// Adjust animation duration based on distance.
		const duration = 10 * (distanceToTravel / scrollingWidth);
		scrollingList.style.animationDuration = `${duration}s`;
	});
</script>

<div class="container mx-auto p-4">
	<div class="top-row flex flex-row space-x-4 mb-4">
		<a href="#" class="hover:underline">Schedule</a>
		<a href="#" class="hover:underline">Players</a>
		<a href="#" class="hover:underline">Teams</a>
	</div>

	<div class="relative flex items-center justify-between border-t border-b border-white">
		<div class="flex items-center">
			<div class="fixed-end bg-green-500 text-white text-center py-2 flex-shrink-0 mr-4 px-4">
				Next Tournament
			</div>
			<div class="scrolling-list flex space-x-4">
				<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
				<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
				<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
			</div>
		</div>
		<div class="fixed-start flex items-center border-l border-white">
			<button class="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600">Button 1</button>
			<button class="ml-2 py-2 px-4 bg-blue-500 text-white hover:bg-blue-600">Button 2</button>
		</div>
	</div>
</div>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(calc(var(--distance) * -1));
		}
	}

	.relative {
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden; /* Ensure nothing overflows out of this container */
	}

	.fixed-end {
		flex-shrink: 0;
		z-index: 2;
		position: relative;
	}

	.fixed-start {
		flex-shrink: 0;
		z-index: 2;
		position: relative;
	}

	.scrolling-list {
		/* The animation definition here will be overridden by JavaScript */
		animation: scroll 20s linear infinite;
		display: flex; /* Flexbox display */
		flex-wrap: nowrap; /* Prevent wrapping of the children */
	}

	.scrolling-list span {
		white-space: nowrap; /* Prevent breaking within a span */
	}
</style>
