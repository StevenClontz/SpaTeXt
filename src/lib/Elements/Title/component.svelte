<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../../stores';
	import C from '../P/C/component.svelte';
	import Em from '../P/Em/component.svelte';
	import M from '../P/M/component.svelte';
	import Q from '../P/Q/component.svelte';
	export let element: Cheerio.Element;
</script>

{#each $CheerioApi(element).contents() as child}
	{#if !('tagName' in child)}
		{$CheerioApi(child).text()}
	{:else if child.tagName === 'm' || child.tagName === 'me'}
		<M element={child} />
	{:else if child.tagName === 'em'}
		<Em element={child} />
	{:else if child.tagName === 'c'}
		<C element={child} />
	{:else if child.tagName === 'q'}
		<Q element={child} />
	{/if}
{/each}
