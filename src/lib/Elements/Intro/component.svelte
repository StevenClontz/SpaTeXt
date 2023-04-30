<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../../stores';
	import P from '../P/component.svelte';
	import List from '../List/component.svelte';
	export let element: Cheerio.Element;
</script>

{#each $CheerioApi(element).children() as child}
	{#if child.tagName === 'p'}
		<P element={child} />
	{:else if child.tagName === 'list'}
		<List element={child} />
	{/if}
{/each}
