<script>
	let { form } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-base-100">
	<h1 class="mb-10 text-5xl font-bold">BreathSpace</h1>

	<form method="POST" class="card w-80 bg-base-200 p-6 shadow-xl">
		<input class="input input-bordered mb-3 w-full" name="username" placeholder="Indtast Brugernavn" />

		<input
			class="input input-bordered mb-5 w-full"
			name="password"
			type="password"
			placeholder="Indtast Adgangskode"
		/>

		<button class="btn btn-primary w-full" type="submit">Log ind →</button>

		{#if form?.message}
			<p class="mt-4 text-center text-sm text-error">{form.message}</p>
		{/if}
	</form>
</div>