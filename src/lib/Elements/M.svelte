<script lang="ts">
    import * as C from 'cheerio'
    import katex from 'katex'
    import 'katex/dist/katex.min.css'
    export let element:C.Element
    let displayMode:boolean
    $: if (element.tagName == "me") {
        displayMode = (element.attribs["mode"] !== "inline")
    } else if (element.tagName == "m") {
        displayMode = (element.attribs["mode"] === "display")
    } else {
        displayMode = false
    }
    $: latex = C.load(element).text()
</script>

{@html katex.renderToString(latex,{throwOnError:false,displayMode:displayMode})}
