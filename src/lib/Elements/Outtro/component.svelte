<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../../stores';
	import P from '../P/component.svelte';
	import List from '../List/component.svelte';
	import { label } from '.';
	export let element: Cheerio.Element;
	import Collapser from '../../Components/Collapser.svelte';
	export let collapsed = true;
</script>

{#if $CheerioApi(element).children().length > 0}
	<p>
		<Collapser
			bind:collapsed
			collapseLabel="Hide {label($CheerioApi, element)}"
			expandLabel="Show {label($CheerioApi, element)}"
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
