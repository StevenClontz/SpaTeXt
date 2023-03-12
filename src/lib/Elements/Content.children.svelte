<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import P from './P.svelte'
    import List from './List.svelte'
    import Knowl from './Knowl.svelte'
    import { CheerioApi } from '../stores'
    export let element:Cheerio.Element
    export let allowKnowls = false
</script>

{#each $CheerioApi(element).children() as child}
    {#if child.tagName === "p"}
        <P element={child}/>
    {:else if child.tagName === "list"}
        <List element={child}/>
    {:else if allowKnowls && child.tagName === "knowl"}
        <Knowl element={child}/>
    {/if}
{/each}
