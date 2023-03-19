<script lang="ts">
	import { page } from '$app/stores';
	import SpaTeXt from '$lib';
	import sampleStxShort from './samples/short.stx?raw';
	import sampleStxLong from './samples/long.stx?raw';
	import CodeMirror from './CodeMirror.svelte';
	const sampleStxNew = `<spatext>\n    <title>New SpaTeXt document</title>\n</spatext>`;
	let stx: string;
	if ($page.url.hash === '') {
		stx = sampleStxNew;
	} else {
		stx = decodeURIComponent($page.url.hash.slice(1));
	}
	let show = true;
	const version = __VERSION__;
	const updateHash = (s: string) => {
		window.location.hash = `#${encodeURIComponent(s)}`;
	};
	const changeSample = (s: string) => {
		stx = s;
		updateHash(s);
	};
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
	<button on:click={(_) => (show = !show)}>Show/hide source</button>
	<button on:click={(_) => changeSample(sampleStxNew)}>New document</button>
	Choose sample:
	<button on:click={(_) => changeSample(sampleStxShort)}>Short</button>
	<button on:click={(_) => changeSample(sampleStxLong)}>Long</button>
</p>

<div class="flex-container">
	{#if show}
		<div class="column">
			<CodeMirror on:change={(_) => updateHash(stx)} bind:value={stx} />
		</div>
	{/if}
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
		overflow-x: scroll;
		-webkit-flex: 1; /* Safari */
		-ms-flex: 1; /* IE 10 */
		flex: 1; /* Standard syntax */
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.flex-container .column::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
