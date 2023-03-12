<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioDoc } from '../stores'
    export let element:Cheerio.Element
    let src:string
    if ($CheerioDoc(element).attr("remote")) {
        src = $CheerioDoc(element).attr("remote") + "/" + $CheerioDoc(element).attr("source")
    } else {
        src = "./" + $CheerioDoc(element).attr("source")
    }
    let alt = $CheerioDoc(element).attr("description")
</script>

<img style="max-width:100%" {src} {alt}/>
