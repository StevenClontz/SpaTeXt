<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioDoc } from '../stores'
    import Children from './P.children.svelte'
    export let element:Cheerio.Element
    let href = $CheerioDoc(element).attr("href")
</script>

<a {href}>
    {#if $CheerioDoc(element).text()===''}
        {href}
    {:else}
        <Children {element}/>
    {/if}
</a>
