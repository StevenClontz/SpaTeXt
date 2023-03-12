<script lang="ts">
    import M from './Elements/M.svelte'
    import P from './Elements/P.svelte'
    import * as Cheerio from 'cheerio'
    export let stx:string
    $: cheerio = Cheerio.load(stx,{xml: true})("spatext:first")
</script>

{#each cheerio.children() as element}
    {#if ["m","me"].includes(element.tagName)}
        <M {element}/>
    {:else if ["p"].includes(element.tagName)}
        <P {element}/>
    {/if}
{:else}
    <div class="warning">(No SpaTeXt elements found.)</div>
{/each}

<style>
    .warning { color:red }
</style>
