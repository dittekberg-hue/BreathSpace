<script>
	let { data } = $props();

	const anfald = data.anfald;
</script>

<div class="min-h-screen bg-base-100 p-8">
	<div class="mx-auto max-w-4xl">
		
		<h1 class="mb-8 text-4xl font-bold text-primary">
			Registrerede anfald
		</h1>

		{#if anfald.length === 0}
			<div class="alert alert-info">
				<span>Ingen registrerede anfald endnu.</span>
			</div>
		{:else}
			<div class="flex flex-col gap-6">
				{#each anfald as entry}
					<div class="card border border-base-300 bg-base-200 shadow-md">
						
						<div class="card-body">
							
							<div class="flex items-center justify-between">
								<h2 class="card-title text-primary">
									{entry.anfaldstype}
								</h2>

								<div class="badge badge-primary">
									Grad {entry.svaerhedsgrad}
								</div>
							</div>

							<p>
								<span class="font-bold">Dato:</span>
								{entry.dato}
							</p>

							<div>
								<p class="font-bold">Hvad ledte op til anfaldet?</p>
								<p>{entry.foerAnfald}</p>
							</div>

							<div>
								<p class="font-bold">Hvordan kom du igennem anfaldet?</p>
								<p>{entry.efterAnfald}</p>
							</div>

						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>