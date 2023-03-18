<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { label, numbering } from './division';
	import Parse from '../Parse.svelte';
	import Collapser from '../Collapser.svelte';
	export let element: Cheerio.Element;
	export let collapsed = true;
</script>

{#each $CheerioApi(element).children('title:first') as title}
	{label(element, $CheerioApi)}
	{numbering(element, $CheerioApi)}:
	<Parse element={title} />.
{:else}
	{label(element, $CheerioApi)}
	{numbering(element, $CheerioApi)}.
{/each}
{#if $CheerioApi(element).find('content').length > 0 || $CheerioApi(element).find('division').length > 0 || $CheerioApi(element).find('intro').length > 0 || $CheerioApi(element).find('outtro').length > 0}
	<Collapser bind:collapsed />
{/if}
