<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '../supabaseClient';

	export let size: number;
	export let url: string;

	let SponsorUrl: string = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('sponsor_logos').download(path);

			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			SponsorUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadSponsor = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;

			let { error } = await supabase.storage.from('sponsor_logos').upload(filePath, file);

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
	{#if SponsorUrl}
		<img
			src={SponsorUrl}
			alt={SponsorUrl ? 'sponsor' : 'No image'}
			class="sponsor image"
			style="height: {size}px, width: {size}px"
		/>
	{:else}
		<div class="sponsor no-image" style="height: {size}px, width: {size}px" />
	{/if}
	<div style="width: {size}px">
		<label class="text-black button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload sponsor image'}
		</label>
		<span style="display:none">
			<input
				type="file"
				id="single"
				accept="image/*"
				bind:files
				on:change={uploadSponsor}
				disabled={uploading}
			/>
		</span>
	</div>
</div>
