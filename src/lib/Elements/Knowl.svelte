<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioDoc } from '../stores'
    import Title from './Title.svelte'
    import Content from './Content.svelte'
    import Intro from './Intro.svelte'
    import Outtro from './Outtro.svelte'
    export let element:Cheerio.Element
    let depth:number=$CheerioDoc(element).parents("knowl").length
</script>

<div>
    {#if depth === 0}
        <h3>
            Knowl{#each $CheerioDoc(element, "title:first") as title}
                : <Title element={title}/>
            {/each}
        </h3>
    {:else}
        <h4>
            Part{#each $CheerioDoc(element, "title:first") as title}
                : <Title element={title}/>
            {/each}
        </h4>
    {/if}
    <div style="margin-left:4em">
        {#each $CheerioDoc(element).children("intro:first") as intro}
            <Intro element={intro}/>
            <hr/>
        {/each}
        {#each $CheerioDoc(element).children("knowl") as knowl}
            <svelte:self element={knowl}/>
        {:else}
            {#each $CheerioDoc(element).children("content:first") as content}
                <Content element={content}/>
            {/each}
        {/each}
        {#each $CheerioDoc(element).children("outtro:first") as outtro}
            <hr/>
            <Outtro element={outtro}/>
        {/each}
    </div>
</div>