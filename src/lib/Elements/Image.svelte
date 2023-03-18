<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	export let element: Cheerio.Element;
	let src: string;
	$: if ($CheerioApi(element).attr('remote')) {
		src = $CheerioApi(element).attr('remote') + '/' + $CheerioApi(element).attr('source');
	} else {
		src = './' + $CheerioApi(element).attr('source');
	}
	$: alt = $CheerioApi(element).attr('description');
</script>

<img style="max-width:100%" {src} {alt} />
