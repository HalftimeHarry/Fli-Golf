<script>
	import { goto } from '$app/navigation';
</script>

<div class="container mx-auto p-4 bg-crimson-500">
	<!-- Content -->
	<div class="flex-grow">
		<slot />
		<!-- Content of the specific route will render here -->
	</div>
</div>
