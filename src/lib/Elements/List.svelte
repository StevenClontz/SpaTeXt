<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioDoc } from '../stores'
    import Item from './Item.svelte'
    export let element:Cheerio.Element
    let ordered = (element.attribs["mode"]=="ordered")
</script>

{#if $CheerioDoc(element).children("item")}
    {#if ordered}
        <ol>
            {#each $CheerioDoc(element).children("item") as item}
                <Item element={item}/>
            {/each}
        </ol>
    {:else}
        <ul>
            {#each $CheerioDoc(element).children("item") as item}
                <Item element={item}/>
            {/each}
        </ul>
    {/if}
{/if}