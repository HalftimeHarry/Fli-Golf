<script lang="ts">
	import AdminNavigation from '/workspace/Fli-Golf/app/src/lib/AdminNavigation.svelte';
	import { goto } from '$app/navigation';

	let currentTile: number = 0;

	const navigate = (path: string) => {
		goto(path);
	};
</script>

<div class="flex">
	<AdminNavigation />

	<div class="content">
		<slot />
	</div>
</div>
