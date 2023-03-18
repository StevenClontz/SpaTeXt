<script lang="ts">
	import SpaTeXt from '$lib';
	import sampleStxShort from './samples/short.stx?raw';
	import sampleStxLong from './samples/long.stx?raw';
	import CodeMirror from './CodeMirror.svelte';
	let stx = sampleStxShort;
	const version = __VERSION__;
</script>

<svelte:head>
	<title>SpaTeXt Demo</title>
</svelte:head>

<h1>SpaTeXt {version}</h1>
<h3>
	Simplified PreTeXt for Apps
	<small>— <a href="https://github.com/StevenClontz/SpaTeXt">GitHub</a></small>
</h3>
<p>
	Choose sample:
	<button on:click|preventDefault={(_) => (stx = sampleStxShort)}>Short</button>
	<button on:click|preventDefault={(_) => (stx = sampleStxLong)}>Long</button>
	<button on:click|preventDefault={(_) => (stx = `<?xml version="1.0"?>\n`)}>Empty</button>
</p>

<div class="flex-container">
	<div class="column"><CodeMirror bind:value={stx} /></div>
	<div class="column"><SpaTeXt {stx} /></div>
</div>

<style>
	h3 {
		color: #444;
	}
	.flex-container {
		width: 100%;
		min-height: 300px;
		margin: 0 auto;
		display: -webkit-flex; /* Safari */
		display: flex; /* Standard syntax */
	}
	.flex-container .column {
		width: 50%;
		padding: 10px;
		-webkit-flex: 1; /* Safari */
		-ms-flex: 1; /* IE 10 */
		flex: 1; /* Standard syntax */
	}
</style>
