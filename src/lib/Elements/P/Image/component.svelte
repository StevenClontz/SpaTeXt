<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { buildSrc } from '.';
	import { CheerioApi } from '../../../stores';
	export let element: Cheerio.Element;
	$: src = buildSrc($CheerioApi,element);
	$: alt = $CheerioApi(element).attr('description');
</script>

<img style="max-width:100%" {src} {alt} />
