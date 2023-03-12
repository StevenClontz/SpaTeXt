<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import P from './P.svelte'
    import List from './List.svelte'
    import { CheerioDoc } from '../stores'
    export let element:Cheerio.Element
</script>

{#each $CheerioDoc(element).children() as child}
    {#if child.tagName === "p"}
        <P element={child}/>
    {:else if child.tagName === "list"}
        <List element={child}/>
    {/if}
{/each}
