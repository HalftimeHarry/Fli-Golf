<script lang="ts">
	import { supabase } from '../supabaseClient';
	import { overlayStore } from '../lib/overlayStore';
	import { fade } from 'svelte/transition';

	let player: Partial<App.FormModels.ProPlayer> = {
		full_name: '',
		game_name: '',
		game_ranking: undefined,
		email: '',
		password: '',
		phone_number: ''
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

	let user;
	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			user = session.user;

			// If signup is successful, we create the pro player with the user's id
			let { error: insertError } = await supabase.rpc('create_pro_player', {
				full_name: player.full_name,
				game_name: player.game_name,
				game_ranking: player.game_ranking,
				email: player.email,
				password: player.password,
				user_id: user.id
			});

			if (insertError) {
				console.error('Error inserting data:', insertError);
			} else {
				console.log('Data inserted successfully');
				closeOverlay();
			}

			submitting = false;
		}
	});

	async function handleSubmit() {
		submitting = true;

		// Sign up the user using supabase's Auth API
		let { error: signUpError } = await supabase.auth.signUp({
			email: player.email,
			password: player.password
		});

		if (signUpError) {
			console.error('Error signing up:', signUpError);
			submitting = false;
			return;
		}
	}

</script>

<div
	class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
	on:click={handleOutsideClick}
	transition:fade={{ duration: 200 }}
>
	<div class="relative bg-white p-4 rounded-lg max-w-xl w-full">
		<!-- Close button -->
		<button
			class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900"
			type="button"
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
		<form class="modal-form" on:submit|preventDefault={handleSubmit}>
			<label class="label text-black">
				<span style="font-weight:bold;">Full Name</span>
				<input
					class="input text-white"
					type="text"
					bind:value={player.full_name}
					placeholder="Enter full name here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Game Name</span>
				<input
					class="input text-white"
					type="text"
					bind:value={player.game_name}
					placeholder="Enter game name here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Game Ranking</span>
				<input
					class="input text-white"
					type="number"
					bind:value={player.game_ranking}
					placeholder="Enter game ranking here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Phone Number</span>
				<input
					class="input text-white"
					type="text"
					bind:value={player.phone_number}
					placeholder="Enter phone number here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Email</span>
				<input
					class="input text-white"
					type="email"
					bind:value={player.email}
					placeholder="Enter email here..."
				/>
			</label>

			<label class="label text-black">
				<span style="font-weight:bold;">Password</span>
				<input
					class="input text-white"
					type="password"
					bind:value={player.password}
					placeholder="Enter password here..."
				/>
			</label>

			<button type="submit" class="btn mt-4 bg-red-600">Submit</button>
		</form>
	</div>
</div>
