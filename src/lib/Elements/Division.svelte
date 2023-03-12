<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import { depth, label, numbering } from './division'
    import Title from './Title.svelte'
    import Content from './Content.svelte'
    import Intro from './Intro.svelte'
    import Outtro from './Outtro.svelte'
    export let element:Cheerio.Element
</script>

<div>
    {#if depth(element,$CheerioApi) === 0}
        <h1>
            {#each $CheerioApi(element).children("title:first") as title}
                {label(element,$CheerioApi)}
                {numbering(element,$CheerioApi)}:
                <Title element={title}/>.
            {:else}
                {label(element,$CheerioApi)}
                {numbering(element,$CheerioApi)}.
            {/each}
        </h1>
    {:else}
        <h2>
            {#each $CheerioApi(element).children("title:first") as title}
                {label(element,$CheerioApi)}
                {numbering(element,$CheerioApi)}:
                <Title element={title}/>.
            {:else}
                {label(element,$CheerioApi)}
                {numbering(element,$CheerioApi)}.
            {/each}
        </h2>
    {/if}
    <div>
        {#each $CheerioApi(element).children("intro:first") as intro}
            <Intro element={intro}/>
        {/each}
        {#each $CheerioApi(element).children("division") as division}
            <svelte:self element={division}/>
        {:else}
            {#each $CheerioApi(element).children("content:first") as content}
                <Content element={content} allowKnowls/>
            {/each}
        {/each}
        {#each $CheerioApi(element).children("outtro:first") as outtro}
            <Outtro element={outtro}/>
        {/each}
    </div>
</div>