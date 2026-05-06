<script>
	import { goto } from '$app/navigation';
</script>

<div class="min-h-screen bg-base-100 p-8">
	<header class="mb-10 flex items-center justify-center gap-4">
		<div class="rounded-2xl bg-blue-50 p-4 text-2xl text-success">〰️</div>
		<h1 class="text-4xl font-bold text-neutral">BreathSpace</h1>
	</header>

	<main class="mx-auto grid max-w-5xl grid-cols-3 gap-8">
		<section class="flex flex-col gap-10 rounded-none bg-slate-400 p-8">
			
			<button
				class="btn rounded-full border-2 border-neutral bg-blue-100 text-neutral px-6 py-3"
				onclick={() => goto('/under-udvikling')}
			>
				Book Videokonsultation
			</button>

			<button
				class="btn rounded-full border-2 border-neutral bg-blue-100 text-neutral"
				onclick={() => goto('/under-udvikling')}
			>
				Afspil Podcast
			</button>

			<button
				class="btn rounded-full border-2 border-neutral bg-blue-100 text-neutral"
				onclick={() => goto('/anfald')}
			>
				Dokumenter Anfald
			</button>

			<button
				class="btn rounded-full border-2 border-neutral bg-blue-100 text-neutral px-6 py-3"
				onclick={() => goto('/se-anfald')}
			>
				Se registrerede anfald
			</button>

			<button
				class="btn rounded-full border-2 border-neutral bg-blue-100 text-neutral px-6 py-3"
				onclick={() => goto('/videokonsultation')}
			>
				Gå til Videokonsultation
			</button>
		</section>

		<section class="bg-slate-300 p-6 text-center text-neutral">
			<h2 class="text-2xl">Betina Jensen</h2>

			<p class="mt-2 text-sm">
				Erfaring med metakognitiv terapi hos ny diagnosticerede KOL patienter.
				Specialiseret i håndtering af dødsangst.
			</p>

			<p class="mt-4 text-sm">Næste ledige tider ...</p>

			<div class="mt-6 flex flex-col gap-4">
				<button class="btn rounded-full border-2 border-neutral bg-slate-300">
					9.00 - 9.30
				</button>
				<button class="btn rounded-full border-2 border-neutral bg-slate-300">
					10.00 - 10:30
				</button>
			</div>

			<div class="divider"></div>

			<h2 class="text-xl">Jørgen Nielsen</h2>
			<p>......</p>
		</section>

		<section class="flex flex-col items-center justify-start gap-8 pt-8">
			<div class="relative rounded-[35px] border-4 border-neutral bg-base-100 px-10 py-8 text-center">
				<p>X % af dine anfald er</p>
				<p>reelle KOL anfald</p>

				<div
					class="absolute -bottom-8 left-1/2 h-10 w-10 -translate-x-1/2 rotate-45 border-b-4 border-r-4 border-neutral bg-base-100"
				></div>
			</div>

			<div class="avatar placeholder mt-4">
				<div class="w-20 rounded-full bg-base-300 text-4xl">
					<span>👩</span>
				</div>
			</div>
		</section>
	</main>
</div>