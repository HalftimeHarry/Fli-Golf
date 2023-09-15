<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';

	interface SectionContent {
		section_id: number | null;
		subtitle: string | null;
		description: string;
		image_url: string | null;
		order: number;
	}

	let sectionContentData: SectionContent = {
		section_id: null,
		subtitle: '',
		description: '',
		image_url: '',
		order: 0
	};

	let submitting = false;
	let sections = [];

	onMount(async () => {
		loadSections();
	});

	async function loadSections() {
		let { data, error } = await supabase.from('sections').select('id, title');
		if (error) {
			console.error('Error loading sections:', error);
		} else {
			sections = data || [];
		}
	}

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
		const { error: insertError } = await supabase
			.from('section_contents')
			.insert([sectionContentData]);

		if (insertError) {
			console.error('Error inserting data:', insertError);
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
				<span class="block mb-1 font-bold">Section</span>
				<select class="border rounded p-2 w-full" bind:value={sectionContentData.section_id}>
					<option value={null}>-- Select a section --</option>
					{#each sections as section}
						<option value={section.id}>{section.title}</option>
					{/each}
				</select>
			</label>

			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold">Subtitle</span>
				<input
					class="border rounded p-2 w-full"
					type="text"
					bind:value={sectionContentData.subtitle}
					placeholder="Enter subtitle..."
				/>
			</label>

			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold">Description</span>
				<textarea
					class="border rounded p-2 w-full"
					bind:value={sectionContentData.description}
					placeholder="Enter description..."
					required
				></textarea>
			</label>

			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold">Image URL</span>
				<input
					class="border rounded p-2 w-full"
					type="url"
					bind:value={sectionContentData.image_url}
					placeholder="Enter image URL..."
				/>
			</label>

			<label class="block my-2 text-black">
				<span class="block mb-1 font-bold">Order</span>
				<input
					class="border rounded p-2 w-full"
					type="number"
					bind:value={sectionContentData.order}
					required
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
