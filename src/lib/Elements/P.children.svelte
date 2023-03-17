<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import C from './C.svelte'
    import Em from './Em.svelte';
    import Image from './Image.svelte';
    import M from './M.svelte'
    import Q from './Q.svelte'
    import Url from './Url.svelte'
    import Xref from './Xref.svelte'
    export let element:Cheerio.Element
    export let xrefId:string|undefined = undefined
    function handleXrefMessage(xref:Cheerio.AnyNode) {
        if (xrefId === undefined) {
            if (xref as Cheerio.Element) {
                xrefId = $CheerioApi(xref).attr("ref")
                console.log(xrefId)
            }
        } else {
            xrefId = undefined
        }
    }
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
    {:else if child.tagName === "xref"}
        <Xref element={child} on:message={_=>handleXrefMessage(child)}/>
    {/if}
{/each}