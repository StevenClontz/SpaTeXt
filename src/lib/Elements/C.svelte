<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import { CheerioApi } from '../stores';
	export let element: Cheerio.Element;
</script>

<code>{$CheerioApi(element).text()}</code>
