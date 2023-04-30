<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import Children from '../../Content/children.svelte';
	export let element: Cheerio.Element;
</script>

<li><Children {element} /></li>
