<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import Parse from '../Parse.svelte'
    import Xref from './Xref.svelte'
    import PSpec from '../CodeMirror/p';
    export let element:Cheerio.Element
    export let xrefId:string|undefined = undefined
    const allowed = PSpec.children as string[]
</script>

{#each $CheerioApi(element).contents() as child}
    {#if !("tagName" in child)}
        {$CheerioApi(child).text()}
    {:else if child.tagName === "xref"}
        <Xref element={child} bind:openXrefId={xrefId}/>
    {:else if allowed.includes(child.tagName)}
        <Parse element={child} {allowed}/>
    {/if}
{/each}