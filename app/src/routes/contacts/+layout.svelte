<script lang="ts">
	import AdminNavigation from '../lib/AdminNavigation.svelte';
	import { goto } from '$app/navigation';

	let currentTile: number = 0;

	const navigate = (path: string) => {
		goto(path);
	};
</script>

<div class="flex">
	<div class="w-12">
		<AdminNavigation />
	</div>

	<div class="main-content flex-grow ml-5 sm:ml-1">
		<slot />
	</div>
</div>
