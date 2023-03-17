<script lang="ts">
    import type * as Cheerio from 'cheerio'
	import { createEventDispatcher } from 'svelte';
    import { CheerioApi } from '../stores'
    export let element:Cheerio.Element
    let ref = $CheerioApi(element).attr("ref")
	const dispatch = createEventDispatcher();
	function setXref() {
		dispatch('message');
	}
</script>

<button on:click={setXref}>
    {ref}
</button>
