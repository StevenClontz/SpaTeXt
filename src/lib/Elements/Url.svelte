<script lang="ts">
    import * as Cheerio from 'cheerio'
    import Contents from './P.children.svelte'
    export let element:Cheerio.Element
    let href = element.attribs["href"]
</script>

<a {href}>
    {#if Cheerio.load(element).text()===''}
        {href}
    {:else}
        <Contents {element}/>
    {/if}
</a>
