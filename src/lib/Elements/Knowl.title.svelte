<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { label } from './knowl';
	import Parse from '../Parse.svelte';
	export let element: Cheerio.Element;
</script>

{#each $CheerioApi(element).children('title:first') as title}
	{label($CheerioApi, element)}:
	<Parse element={title} />.
{:else}
	{label($CheerioApi, element)}.
{/each}
