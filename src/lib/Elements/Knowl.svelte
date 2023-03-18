<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { depth } from './knowl';
	import Content from './Content.svelte';
	import Title from './Knowl.title.svelte';
	import Parse from '../Parse.svelte';
	export let element: Cheerio.Element;
</script>

<div>
	{#if depth(element, $CheerioApi) === 0}
		<h3><Title {element} /></h3>
	{:else}
		<h4><Title {element} /></h4>
	{/if}
	<div style="margin-left:3em">
		{#each $CheerioApi(element).children('intro:first') as intro}
			<Parse element={intro} />
		{/each}
		{#each $CheerioApi(element).children('knowl') as knowl}
			<svelte:self element={knowl} />
		{:else}
			{#each $CheerioApi(element).children('content:first') as content}
				<Content element={content} allowKnowls={false} />
			{/each}
		{/each}
		{#each $CheerioApi(element).children('outtro:first') as outtro}
			<Parse element={outtro} />
		{/each}
	</div>
</div>
