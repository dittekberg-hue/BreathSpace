<div class="min-h-screen bg-base-100 p-8">
	<header class="mb-8 flex items-center justify-between">
		<a href="/home" class="btn btn-ghost">← Tilbage</a>
		<h1 class="text-3xl font-bold text-neutral">Videokonsultation</h1>
		<div></div>
	</header>

	<main class="mx-auto grid max-w-6xl grid-cols-3 gap-6">
		<section class="col-span-2 rounded-3xl bg-slate-800 p-6 text-white shadow-xl">
			<div class="flex h-[420px] items-center justify-center rounded-2xl bg-slate-700">
				<div class="text-center">
					<div class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-500 text-5xl">
						👩‍⚕️
					</div>
					<p class="text-xl font-bold">Betina Jensen</p>
					<p class="text-sm opacity-80">Forbinder til konsultation...</p>
				</div>
			</div>

			<div class="mt-6 flex justify-center gap-4">
				<button class="btn btn-circle">🎤</button>
				<button class="btn btn-circle">📷</button>
				<button class="btn btn-error rounded-full px-8 text-white">Afslut</button>
			</div>
		</section>

		<aside class="rounded-3xl bg-slate-200 p-6 text-neutral shadow-xl">
			<h2 class="mb-4 text-xl font-bold">Konsultation</h2>

			<div class="space-y-3 text-sm">
				<p><strong>Behandler:</strong> Betina Jensen</p>
				<p><strong>Tid:</strong> 9.00 - 9.30</p>
				<p><strong>Status:</strong> Venter på behandler</p>
			</div>

			<div class="divider"></div>

			<h3 class="font-bold">Noter</h3>
			<textarea
				class="textarea textarea-bordered mt-2 h-40 w-full"
				placeholder="Skriv noter til konsultationen..."
			></textarea>

			<button class="btn btn-primary mt-4 w-full">Gem noter</button>
		</aside>
	</main>
</div>