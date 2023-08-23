<script>
	import { onMount } from 'svelte';

	let fixedElement;
	let scrollingList;

	onMount(() => {
		const containerWidth = fixedElement.parentNode.offsetWidth;
		const fixedWidth = fixedElement.offsetWidth;
		const scrollingWidth = scrollingList.scrollWidth;

		// Calculate the distance the list needs to travel
		const additionalDistance = fixedWidth * 4.0;
		const distanceToTravel = scrollingWidth - containerWidth + fixedWidth + additionalDistance;

		// Set the distance as a CSS variable on the scrolling list
		scrollingList.style.setProperty('--distance', `${distanceToTravel}px`);

		// Adjust animation duration based on distance
		const duration = 20 * (distanceToTravel / (scrollingWidth - containerWidth + fixedWidth));
		scrollingList.style.animationDuration = `${duration}s`;
	});
</script>

<div class="container mx-auto p-4">
	<div class="top-row flex flex-row space-x-4 mb-4">
		<a href="#" class="hover:underline">Schedule</a>
		<a href="#" class="hover:underline">Players</a>
		<a href="#" class="hover:underline">Teams</a>
		<!-- Add other links similarly -->
	</div>

	<div class="relative flex items-center">
		<div
			bind:this={fixedElement}
			class="fixed-element bg-green-500 text-white text-center py-2 flex-shrink-0 mr-4 px-4"
		>
			Next Tournament
		</div>
		<div bind:this={scrollingList} class="scrolling-list flex space-x-4">
			<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
			<!-- Repeat this list for continuous effect -->
			<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
			<!-- Repeat this list for continuous effect -->
			<span>CHICAGO — RICH HARVEST FARMS — SEP 22—24</span>
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

	.fixed-element {
		flex-shrink: 0;
		z-index: 2;
		position: relative;
	}

	.scrolling-list {
		/* The animation definition here will be overridden by JavaScript */
		animation: scroll 20s linear infinite;
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
