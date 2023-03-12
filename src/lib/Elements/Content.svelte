<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import Children from './Content.children.svelte'
    export let element:Cheerio.Element
    export let allowKnowls = false
</script>

<div>
    <Children {element} {allowKnowls}/>
</div>