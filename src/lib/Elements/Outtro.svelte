<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import P from './P.svelte'
    import List from './List.svelte'
    import { label } from './outtro'
    export let element:Cheerio.Element
    import Collapser from '../Collapser.svelte'
    export let collapsed=true
</script>

{#each $CheerioApi(element).children() as child}
    <p>
        <Collapser 
            bind:collapsed 
            collapseLabel="Hide {label(element,$CheerioApi)}" 
            expandLabel="Show {label(element,$CheerioApi)}"/>
    </p>
    {#if !collapsed}
        {#if child.tagName === "p"}
            <P element={child}/>
        {:else if child.tagName === "list"}
            <List element={child}/>
        {/if}
    {/if}
{/each}
