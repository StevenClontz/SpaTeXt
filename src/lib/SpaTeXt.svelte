<script lang="ts">
    import Content from './Elements/Content.svelte'
    import Division from './Elements/Division.svelte'
    import Knowl from './Elements/Knowl.svelte'
    import Title from './Elements/Title.svelte'
    import { CheerioApi } from './stores'
    import * as Cheerio from 'cheerio'
    export let stx:string
    $: CheerioApi.update(()=>Cheerio.load(stx,{xml: true}))
    $: spatext = $CheerioApi("spatext:first")
</script>

{#each spatext.children("title") as element}
    <h1 style="text-align:center;font-size:2.5em"><Title {element}/></h1>
{/each}
{#each spatext.children("division") as element}
    <Division {element}/>
{:else}
    {#each spatext.children("content:first") as element}
        <Content {element} allowKnowls/>
    {:else}
        {#each spatext.children("knowl:first") as element}
            <Knowl {element}/>
        {:else}
        <div class="warning">(No SpaTeXt elements found.)</div>
        {/each}
    {/each}
{/each}

<style>
    .warning { color:red }
</style>
