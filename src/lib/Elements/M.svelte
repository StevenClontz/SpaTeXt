<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioApi } from '../stores'
    import katex from 'katex'
    import 'katex/dist/katex.min.css'
    export let element:Cheerio.Element
    let displayMode:boolean
    $: if (element.tagName == "me") {
        displayMode = ($CheerioApi(element).attr("mode") !== "inline")
    } else if (element.tagName == "m") {
        displayMode = ($CheerioApi(element).attr("mode") === "display")
    } else {
        displayMode = false
    }
    $: latex = $CheerioApi(element).text()
</script>

{@html katex.renderToString(latex,{throwOnError:false,displayMode:displayMode})}
