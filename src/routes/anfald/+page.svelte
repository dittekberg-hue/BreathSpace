<script>
	let { form } = $props();
</script>

<div class="min-h-screen bg-base-100 px-6 py-10">
	<div class="mx-auto max-w-md">
		<h1 class="mb-8 text-4xl font-bold text-primary">Anfaldsskema</h1>

		<form method="POST" class="flex flex-col gap-5">
			<label class="form-control">
				<span class="label-text font-bold text-primary">Dato:</span>
				<input class="input input-bordered" name="dato" type="date" />
			</label>

			<div>
				<p class="mb-2 font-bold text-primary">Angiv graden af anfaldet</p>
				<div class="grid grid-cols-5 gap-2">
					{#each [1, 2, 3, 4, 5] as number}
						<label class="btn bg-indigo-100 text-primary">
							<input class="hidden" type="radio" name="svaerhedsgrad" value={number} />
							{number}
						</label>
					{/each}
				</div>
			</div>

			<label class="form-control">
				<span class="label-text font-bold text-primary">Hvad ledte op til anfaldet?</span>
				<textarea class="textarea textarea-bordered h-24" name="foerAnfald"></textarea>
			</label>

			<div>
				<p class="mb-2 font-bold text-primary">Hvilken type anfald var det?</p>
				<div class="flex flex-col gap-2">
					<label class="btn justify-start bg-indigo-100 text-primary">
						<input class="hidden" type="radio" name="anfaldstype" value="KOL anfald" />
						KOL anfald
					</label>

					<label class="btn justify-start bg-indigo-100 text-primary">
						<input class="hidden" type="radio" name="anfaldstype" value="Angst anfald" />
						Angst anfald
					</label>

					<label class="btn justify-start bg-indigo-100 text-primary">
						<input class="hidden" type="radio" name="anfaldstype" value="Ved ikke" />
						Ved ikke
					</label>
				</div>
			</div>

			<label class="form-control">
				<span class="label-text font-bold text-primary">Hvordan kom du igennem anfaldet?</span>
				<textarea class="textarea textarea-bordered h-24" name="efterAnfald"></textarea>
			</label>

			<button class="btn btn-primary text-lg" type="submit">Indsend</button>

			{#if form?.message}
				<p class="text-center font-bold text-success">{form.message}</p>
			{/if}
		</form>
	</div>
</div>
