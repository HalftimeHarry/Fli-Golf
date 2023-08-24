<script>
	import FeatureCard from '$lib/FeatureCard.svelte';
	import BasicCard from '$lib//BasicCard.svelte';

	let selectedTab = 'upcoming';
</script>

<div class="p-6">
	<h1 class="text-9xl font-bold mb-4 uppercase">Schedule</h1>

	<div class="flex space-x-4 mb-4">
		<button
			class="px-4 py-2 {selectedTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-800'}"
			on:click={() => (selectedTab = 'upcoming')}
		>
			Upcoming
		</button>
		<button
			class="px-4 py-2 {selectedTab === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-800'}"
			on:click={() => (selectedTab = 'completed')}
		>
			Completed
		</button>
	</div>

	{#if selectedTab === 'upcoming'}
		<!-- Feature Card for Upcoming -->
		<FeatureCard eventTitle="Feature Event Title" eventDescription="Feature Event Description" />

		<!-- Basic Cards for Upcoming -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<BasicCard eventTitle="Upcoming Event 1" eventDescription="Event Description" />
			<!-- Add more BasicCard components for other upcoming events -->
		</div>
		<!-- Basic Cards for Upcoming -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<BasicCard eventTitle="Upcoming Event 2" eventDescription="Event Description" />
			<!-- Add more BasicCard components for other upcoming events -->
		</div>
	{:else}
		<!-- Basic Cards for Completed -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<BasicCard eventTitle="Completed Event 1" eventDescription="Event Description" />
			<!-- Add more BasicCard components for other completed events -->
		</div>
		<!-- Basic Cards for Completed -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<BasicCard eventTitle="Completed Event 2" eventDescription="Event Description" />
			<!-- Add more BasicCard components for other completed events -->
		</div>
	{/if}
</div>
