<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';
	import { CheerioApi } from '../../../stores';
	import { displayMode } from '.';
	export let element: Cheerio.Element;
	$: latex = $CheerioApi(element).text();
</script>

{@html katex.renderToString(
	latex, 
	{ 
		throwOnError: false, 
		displayMode: displayMode($CheerioApi,element) 
	}
)}
