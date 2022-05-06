<script lang="ts">
	import Knowl from './Knowl.svelte';

	let xmlString=`
<knowl type="exercise">
	<content>
		<p>Foo. <m>x^2+y^2=z^2</m></p>
	</content>
	<outtro>
		<p>Bar. <em>You see?</em> You should.</p>
	</outtro>
</knowl>
`.trim();
	const parser = new DOMParser();
	let knowlDom = parser.parseFromString(xmlString, "application/xml")
	let knowl: Element
	$: if (!parser.parseFromString(xmlString, "application/xml").querySelector('parsererror')) {
	    knowlDom = parser.parseFromString(xmlString, "application/xml")
		knowl = knowlDom.getElementsByTagName("knowl")[0]
	}
</script>

<main>
	<div style="overflow:hidden">
		<div style="width: 48%; float:left">
			<textarea bind:value={xmlString}/>
		</div>
		<div style="width: 48%; float:right">
			<Knowl {knowl}/>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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