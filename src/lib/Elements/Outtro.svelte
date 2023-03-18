<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import P from './P.svelte';
	import List from './List.svelte';
	import { label } from './outtro';
	export let element: Cheerio.Element;
	import Collapser from '../Collapser.svelte';
	export let collapsed = true;
</script>

{#if $CheerioApi(element).children().length > 0}
	<p>
		<Collapser
			bind:collapsed
			collapseLabel="Hide {label(element, $CheerioApi)}"
			expandLabel="Show {label(element, $CheerioApi)}"
		/>
	</p>
{/if}
{#each $CheerioApi(element).children() as child}
	{#if !collapsed}
		{#if child.tagName === 'p'}
			<P element={child} />
		{:else if child.tagName === 'list'}
			<List element={child} />
		{/if}
	{/if}
{/each}
