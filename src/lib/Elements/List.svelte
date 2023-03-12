<script lang="ts">
    import * as Cheerio from 'cheerio'
    import Item from './Item.svelte'
    export let element:Cheerio.Element
    let ordered = (element.attribs["mode"]=="ordered")
</script>

{#if Cheerio.load(element)("item")}
    {#if ordered}
        <ol>
            {#each Cheerio.load(element)("item") as item}
                <Item element={item}/>
            {/each}
        </ol>
    {:else}
        <ul>
            {#each Cheerio.load(element)("item") as item}
                <Item element={item}/>
            {/each}
        </ul>
    {/if}
{/if}