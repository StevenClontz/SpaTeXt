<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { depth } from './division';
	import Content from './Content.svelte';
    import Title from './Division.title.svelte'
	import Parse from '../Parse.svelte';
	export let element: Cheerio.Element;
	export let collapsed = true;
</script>

<div>
	{#if depth(element, $CheerioApi) === 0}
		<h1><Title {element} bind:collapsed/></h1>
	{:else}
        <h2><Title {element} bind:collapsed/></h2>
	{/if}
	{#if !collapsed}
		<div class="subdivision">
			{#each $CheerioApi(element).children('intro:first') as intro}
				<Parse element={intro} />
			{/each}
			{#each $CheerioApi(element).children('division') as division}
				<svelte:self element={division} />
			{:else}
				{#each $CheerioApi(element).children('content:first') as content}
					<Content element={content} allowKnowls />
				{/each}
			{/each}
			{#each $CheerioApi(element).children('outtro:first') as outtro}
				<Parse element={outtro} />
			{/each}
		</div>
	{/if}
</div>

<style>
	div.subdivision {
		margin-left: 1em;
	}
</style>
