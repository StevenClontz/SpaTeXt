<script lang="ts">
    import Content from './Elements/Content.svelte'
    import Division from './Elements/Division.svelte'
    import Knowl from './Elements/Knowl.svelte'
    import P from './Elements/P.svelte'
    import { CheerioApi } from './stores'
    import * as Cheerio from 'cheerio'
    export let stx:string
    $: CheerioApi.update(()=>Cheerio.load(stx,{xml: true}))
</script>

{#each $CheerioApi("spatext:first").children() as element}
    {#if ["content"].includes(element.tagName)}
        <Content {element}/>
    {:else if ["knowl"].includes(element.tagName)}
        <Knowl {element}/>
    {:else if ["p"].includes(element.tagName)}
        <P {element}/>
    {:else if ["division"].includes(element.tagName)}
        <Division {element}/>
    {/if}
{:else}
    <div class="warning">(No SpaTeXt elements found.)</div>
{/each}

<style>
    .warning { color:red }
</style>
