<script lang="ts">
    import type * as C from 'cheerio'
    import Contents from './P.contents.svelte'
    export let element:C.Element
</script>

<p>
    <Contents {element}/>
</p>