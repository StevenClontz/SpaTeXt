<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import { depth, label } from './knowl'
    import Title from './Title.svelte'
    import Content from './Content.svelte'
    import Intro from './Intro.svelte'
    import Outtro from './Outtro.svelte'
    export let element:Cheerio.Element
</script>

<div>
    {#if depth(element,$CheerioApi) === 0}
        <h3>
            {#each $CheerioApi(element).children("title:first") as title}
                {label(element,$CheerioApi)}: <Title element={title}/>.
            {:else}
                {label(element,$CheerioApi)}.
            {/each}
        </h3>
    {:else}
        <h4>
            {#each $CheerioApi(element).children("title:first") as title}
                {label(element,$CheerioApi)}: <Title element={title}/>.
            {:else}
                {label(element,$CheerioApi)}.
            {/each}
        </h4>
    {/if}
    <div style="margin-left:3em">
        {#each $CheerioApi(element).children("intro:first") as intro}
            <Intro element={intro}/>
            <hr/>
        {/each}
        {#each $CheerioApi(element).children("knowl") as knowl}
            <svelte:self element={knowl}/>
        {:else}
            {#each $CheerioApi(element).children("content:first") as content}
                <Content element={content}/>
            {/each}
        {/each}
        {#each $CheerioApi(element).children("outtro:first") as outtro}
            <hr/>
            <Outtro element={outtro}/>
        {/each}
    </div>
</div>