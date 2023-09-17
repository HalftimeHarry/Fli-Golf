<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '../supabaseClient';

	export let size: number;
	export let url: string;

	let sectionImageUrl: string = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('section_images').download(path);

			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			sectionImageUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadSectionImage = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;

			let { error } = await supabase.storage.from('section_images').upload(filePath, file);

			if (error) {
				throw error;
			}

			url = filePath;
			dispatch('upload');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	$: if (url) downloadImage(url);
</script>

<div style="width: {size}px" aria-live="polite">
	{#if sectionImageUrl}
		<img
			src={sectionImageUrl}
			alt={sectionImageUrl ? 'section' : 'No image'}
			class="section-image"
			style="height: {size}px, width: {size}px"
		/>
	{:else}
		<div class="section-no-image" style="height: {size}px, width: {size}px" />
	{/if}
	<div style="width: {size}px">
		<label class="text-black button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload section image'}
		</label>
		<span style="display:none">
			<input
				type="file"
				id="single"
				accept="image/*"
				bind:files
				on:change={uploadSectionImage}
				disabled={uploading}
			/>
		</span>
	</div>
</div>
