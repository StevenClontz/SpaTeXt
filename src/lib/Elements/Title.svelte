<script lang="ts">
    import * as Cheerio from 'cheerio'
    import C from './C.svelte'
    import Em from './Em.svelte';
    import M from './M.svelte'
    import Q from './Q.svelte'
    export let element:Cheerio.Element
</script>


{#each Cheerio.load(element)("*:first").contents() as child}
    {#if !("tagName" in child)}
        {Cheerio.load(child).text()}
    {:else if child.tagName === "m" || child.tagName === "me"}
        <M element={child}/>
    {:else if child.tagName === "em"}
        <Em element={child}/>
    {:else if child.tagName === "c"}
        <C element={child}/>
    {:else if child.tagName === "q"}
        <Q element={child}/>
    {/if}
{/each}
