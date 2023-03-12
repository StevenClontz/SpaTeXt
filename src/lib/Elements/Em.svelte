<script lang="ts">
    import type * as Cheerio from 'cheerio'
    export let element:Cheerio.Element
    import Contents from './P.children.svelte'
</script>

<em><Contents {element}/></em>
