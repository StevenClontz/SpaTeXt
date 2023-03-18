<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import Children from './P.children.svelte';
	import Parse from '../Parse.svelte';
	import { elementLookup } from './xref';
	export let element: Cheerio.Element;
	let xrefId: string | undefined = undefined;
	let xrefElement: Cheerio.Element | undefined;
	$: xrefElement = elementLookup($CheerioApi,xrefId)
</script>

<p>
	<Children bind:xrefId {element} />
</p>
{#if xrefElement !== undefined}
	<div class="xref-result">
		<Parse element={xrefElement} />
	</div>
{/if}

<style>
	.xref-result {
		margin: 0 2em;
		padding: 0 1em;
		border: 1px solid #888;
	}
</style>
