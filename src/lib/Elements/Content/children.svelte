<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import Parse from '../../Parse/component.svelte';
	import { CheerioApi } from '../../stores';
	import { allowable } from './children';
	export let element: Cheerio.Element;
	export let allowKnowls = false;
</script>

{#each $CheerioApi(element).children() as child}
	{#if allowable(child,{allowKnowls:allowKnowls})}
		<Parse element={child} />
	{/if}
{/each}
