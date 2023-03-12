<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import C from './C.svelte'
    import Em from './Em.svelte';
    import Image from './Image.svelte';
    import M from './M.svelte'
    import Q from './Q.svelte'
    import Url from './Url.svelte'
    export let element:Cheerio.Element
</script>

{#each $CheerioApi(element).contents() as child}
    {#if !("tagName" in child)}
        {$CheerioApi(child).text()}
    {:else if child.tagName === "m" || child.tagName === "me"}
        <M element={child}/>
    {:else if child.tagName === "em"}
        <Em element={child}/>
    {:else if child.tagName === "c"}
        <C element={child}/>
    {:else if child.tagName === "q"}
        <Q element={child}/>
    {:else if child.tagName === "image"}
        <Image element={child}/>
    {:else if child.tagName === "url"}
        <Url element={child}/>
    {/if}
{/each}