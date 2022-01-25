<script lang="ts">
	import Exercise from './Exercise.svelte';
	export let name: string;
	let xmlString=`
<exercise>
	<statement>
		<p>Foo. <m>x^2+y^2=z^2</m></p>
	</statement>
	<answer>
		<p>Bar. <em>You see?</em> You should.</p>
	</answer>
</exercise>
`.trim();
	const parser = new DOMParser();
	let exerciseDom = parser.parseFromString(xmlString, "application/xml")
	$: if (!parser.parseFromString(xmlString, "application/xml").querySelector('parsererror')) {
		exerciseDom = parser.parseFromString(xmlString, "application/xml")
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<textarea bind:value={xmlString}/>
	
	<Exercise {exerciseDom}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	textarea {
		width:100%;height:15em;
	}
</style>