<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';

	interface Section {
		title: string;
		order: number | null;
	}

	let sectionData: Section = {
		title: '',
		order: null
	};

	let submitting = false;

	function closeOverlay() {
		overlayStore.update((storeValue) => (storeValue = false));
	}

	function handleOutsideClick(e) {
		if (e.target === e.currentTarget) {
			closeOverlay();
		}
	}

	async function handleSubmit() {
		submitting = true;

		const { error } = await supabase.from('sections').insert([sectionData]);

		if (error) {
			console.error('Error inserting data:', error);
		} else {
			console.log('Data inserted successfully');
			closeOverlay();
		}

		submitting = false;
	}
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
	on:keydown={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full shadow-lg">
		<!-- Close button -->
		<button
			class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900"
			on:click={closeOverlay}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<!-- Form -->
		<form on:submit|preventDefault={handleSubmit}>
			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold">Section Title</span>
				<input
					class="border rounded p-2 w-full"
					type="text"
					bind:value={sectionData.title}
					placeholder="Enter section title..."
				/>
			</label>

			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold text-black">Order</span>
				<input
					class="border rounded p-2 w-full"
					type="number"
					bind:value={sectionData.order}
					placeholder="Enter order number..."
				/>
			</label>

			<button
				type="submit"
				class="w-full py-2 mt-4 bg-blue-600 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			>
				Submit
			</button>
		</form>
	</div>
</div>
