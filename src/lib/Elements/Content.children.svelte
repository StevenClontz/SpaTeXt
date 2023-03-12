<script lang="ts">
    import * as Cheerio from 'cheerio'
    import P from './P.svelte'
    import List from './List.svelte'
    export let element:Cheerio.Element
</script>

{#each Cheerio.load(element)("*:first").children() as child}
    {#if child.tagName === "p"}
        <P element={child}/>
    {:else if child.tagName === "list"}
        <List element={child}/>
    {/if}
{/each}