<script lang="ts">
    import M from './Elements/M.svelte'
    import P from './Elements/P.svelte'
    import * as C from 'cheerio'
    export let stx:string
    $: cheerio = C.load(stx,{xml: true}).root().children()
</script>

{#each cheerio as element}
    {#if element.tagName === "m" || element.tagName === "me"}
        <M {element}/>
    {:else if element.tagName === "p"}
        <P {element}/>
    {/if}
{:else}
    <div class="warning">(No SpaTeXt elements found.)</div>
{/each}

<style>
    .warning { color:red }
</style>
