<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import Item from './Item.svelte'
    export let element:Cheerio.Element
    $: ordered = (element.attribs["mode"]=="ordered")
</script>

{#if $CheerioApi(element).children("item")}
    {#if ordered}
        <ol>
            {#each $CheerioApi(element).children("item") as item}
                <Item element={item}/>
            {/each}
        </ol>
    {:else}
        <ul>
            {#each $CheerioApi(element).children("item") as item}
                <Item element={item}/>
            {/each}
        </ul>
    {/if}
{/if}