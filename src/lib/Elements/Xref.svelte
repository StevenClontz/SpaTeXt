<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	import { labelLookup } from './xref';
	export let element: Cheerio.Element;
	export let openXrefId: string | undefined;
	let ref = $CheerioApi(element).attr('ref');
	const setXref = (_: Event): void => {
		if (openXrefId === ref) {
			openXrefId = undefined;
		} else {
			openXrefId = ref;
		}
	};
</script>

<button on:click={setXref}>
	{#if openXrefId === ref}▾{:else}▸{/if}{labelLookup($CheerioApi,ref)}
</button>
