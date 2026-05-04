<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex min-h-screen items-center justify-center bg-base-100 p-8">
	<div class="card max-w-md bg-base-200 p-8 text-center shadow-xl">
		<h1 class="mb-4 text-3xl font-bold text-neutral">Siden er under udvikling</h1>

		<p class="mb-6 text-neutral">
			Denne funktion er endnu ikke færdigudviklet og kan derfor ikke tilgås i prototypen.
		</p>

		<button class="btn btn-primary" onclick={() => goto('/home')}>
			Tilbage til forsiden
		</button>
	</div>
</div>