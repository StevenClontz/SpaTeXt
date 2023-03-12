<script lang="ts">
    import type * as Cheerio from 'cheerio'
    export let element:Cheerio.Element
    let src = element.attribs["source"]
    let alt = element.attribs["description"]
</script>

<img style="max-width:100%" {src} {alt}/>
