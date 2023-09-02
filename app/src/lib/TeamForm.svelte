<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';
	import { v4 as uuidv4 } from 'uuid';

   interface TeamInput {
        id: string;
        team_name: string;
        team_image_url?: string;
        website?: string;
        updated_at?: Date;
    }

    let team: TeamInput = {
        id: '',
        team_name: '',
        team_image_url: '',
        website: ''
    };

	let imageFile; // for uploaded file

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

		team.id = uuidv4();

		if (imageFile) {
			const filePath = `team_avatars/${team.id}/${imageFile.name}`;
			const { error: uploadError } = await supabase.storage
				.from('team_avatars')
				.upload(filePath, imageFile);

			if (uploadError) {
				console.error('Error uploading avatar:', uploadError);
				return;
			}

			team.team_image_url = filePath; // Update the team's image URL with the path of the uploaded image
		}

		let { data, error } = await supabase.from('teams').insert([team]);
		if (error) {
			console.error('Error inserting data:', error);
		} else {
			console.log('Data inserted successfully:', data);
			closeOverlay();
		}

		submitting = false;
	}

	function handleImageUpload(event) {
		imageFile = event.target.files[0];
	}
</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full">
		<button
			class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900"
			type="button"
			on:click={closeOverlay}
		>
			<!-- ...close button SVG... -->
		</button>

		<form on:submit|preventDefault={handleSubmit}>
			<label class="label text-black">
				<span style="font-weight:bold;">Team Name</span>
				<input
					class="input text-white"
					type="text"
					bind:value={team.team_name}
					placeholder="Enter team name here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Team Image</span>
				<input
					class="input text-white"
					type="file"
					accept="image/*"
					on:change={handleImageUpload}
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Website</span>
				<input
					class="input text-white"
					type="url"
					bind:value={team.website}
					placeholder="Enter team website here..."
				/>
			</label>

			<button type="submit" class="btn mt-4 bg-red-600">Submit</button>
		</form>
	</div>
</div>
