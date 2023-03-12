<script lang="ts">
    import * as Cheerio from 'cheerio'
    import Title from './Title.svelte'
    import Content from './Content.svelte'
    import Intro from './Intro.svelte'
    import Outtro from './Outtro.svelte'
    export let element:Cheerio.Element
</script>

<div>
    <h3>
        Knowl:
        {#each Cheerio.load(element)("title:first") as title}
            <Title element={title}/>
        {/each}
    </h3>
    {#each Cheerio.load(element)("intro:first") as intro}
        <Intro element={intro}/>
        <hr/>
    {/each}
    {#each Cheerio.load(element)("content:first") as content}
        <Content element={content}/>
    {/each}
    {#each Cheerio.load(element)("outtro:first") as outtro}
        <hr/>
        <Outtro element={outtro}/>
    {/each}
</div>