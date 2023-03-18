<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import Children from './P.children.svelte'
    export let element:Cheerio.Element
    $: href = $CheerioApi(element).attr("href")
</script>

<a {href}>
    {#if $CheerioApi(element).text()===''}
        {href}
    {:else}
        <Children {element}/>
    {/if}
</a>
