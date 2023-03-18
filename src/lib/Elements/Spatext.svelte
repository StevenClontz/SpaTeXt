<script lang="ts">
	import Parse from '../Parse.svelte';
	import Content from './Content.svelte';
	import { CheerioApi } from '../stores';
	import * as Cheerio from 'cheerio';
	export let stx: string;
	$: CheerioApi.update(() => Cheerio.load(stx, { xml: true }));
	$: spatext = $CheerioApi('spatext:first');
</script>

{#each spatext as _}
	{#each spatext.children('title') as element}
		<h1 style="text-align:center;font-size:2.5em"><Parse {element} /></h1>
	{/each}
	{#each spatext.children('division') as element}
		<Parse {element} />
	{:else}
		{#each spatext.children('content:first') as element}
			<Content {element} allowKnowls />
		{:else}
			{#each spatext.children('knowl:first') as element}
				<Parse {element} />
			{/each}
		{/each}
	{/each}
{:else}
	<p class="warning">Missing <code>&lt;spatext&gt;</code> element.</p>
{/each}

<style>
	.warning {
		color: red;
	}
</style>
