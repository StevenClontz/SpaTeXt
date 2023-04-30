<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../../stores';
	import { label } from '.';
	import Parse from '../../Parse/component.svelte';
	import Collapser from '../../Components/Collapser.svelte';
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
