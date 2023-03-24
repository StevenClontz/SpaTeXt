<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { label } from './division';
	import Parse from '../Parse.svelte';
	import Collapser from '../Collapser.svelte';
	export let element: Cheerio.Element;
	export let collapsed = true;
</script>

{#each $CheerioApi(element).children('title:first') as title}
	{label($CheerioApi, element)}:
	<Parse element={title} />.
{:else}
	{label($CheerioApi, element)}.
{/each}
{#if $CheerioApi(element).find('content,division,intro,outtro').length > 0 }
	<Collapser bind:collapsed />
{/if}
