<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import Children from './P.children.svelte'
    import Knowl from './Knowl.svelte';
    export let element:Cheerio.Element
    let xrefId:string|undefined = undefined
    let xrefElement:Cheerio.Element|undefined
    $: if (xrefId !== undefined) {
        let xrefElements = $CheerioApi(`knowl[id=${xrefId}]`)
        if (xrefElements.length > 0) {
            xrefElement = xrefElements[0]
        } else {
            xrefElement = undefined
        }
    } else {
        xrefElement = undefined
    }
</script>

<p>
    <Children bind:xrefId={xrefId} {element}/>
</p>
{#if xrefElement !== undefined}
    <div class="xref-result">
        <Knowl element={xrefElement}/>
    </div>
{/if}

<style>
    .xref-result {
        margin: 0 2em;
        padding: 0 1em;
        border: 1px solid #888;
    }
</style>