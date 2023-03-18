<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import Parse from '../Parse.svelte'
    import { CheerioApi } from '../stores'
    export let element:Cheerio.Element
    export let allowKnowls = false
    const allowable = (e:Cheerio.Element):boolean => {
        return ["p","list"].includes(e.tagName) || 
            ( allowKnowls && e.tagName === "knowl" )
    }
</script>

{#each $CheerioApi(element).children() as child}
    {#if allowable(child)}
        <Parse element={child}/>
    {/if}
{/each}
