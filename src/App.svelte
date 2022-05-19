<script lang="ts">
    import SectionContent from './Elements/SectionContent.svelte'
    import Knowl from './Elements/Knowl.svelte'
    import KnowlContent from './Elements/KnowlContent.svelte'
    import Paragraph from './Elements/Paragraph.svelte'
    // @ts-ignore
    import exampleStxSource from './xml/example.stx'
    // @ts-ignore
    import latexXsl from './xml/latex.xsl'
    // @ts-ignore
    import htmlXsl from './xml/html.xsl'
    // @ts-ignore
    import ptxXsl from './xml/pretext.xsl'

    const parser = new DOMParser()
    let exampleStx:string = exampleStxSource
    let stxDom = parser.parseFromString(exampleStx, "application/xml")

    const latexTransform = new XSLTProcessor()
    const latexXslDom = parser.parseFromString(latexXsl, "application/xml")
    latexTransform.importStylesheet(latexXslDom)

    const htmlTransform = new XSLTProcessor()
    const htmlXslDom = parser.parseFromString(htmlXsl, "application/xml")
    htmlTransform.importStylesheet(htmlXslDom)

    const ptxTransform = new XSLTProcessor()
    const ptxXslDom = parser.parseFromString(ptxXsl, "application/xml")
    ptxTransform.importStylesheet(ptxXslDom)

    let rightPane = "result"
    let stxElement: Element
    let latex: string
    let html: string
    let pretext: string
    let error: boolean
    let errorText: string
    $: if (parser.parseFromString(exampleStx, "application/xml").querySelector('parsererror')) {
        error = true
        errorText = "Error parsing XML"
    } else {
        stxDom = parser.parseFromString(exampleStx, "application/xml")
        stxElement = stxDom.querySelector(":scope")
        if (
            stxElement.namespaceURI!="https://spatext.clontz.org" || 
            stxElement.getAttribute("version")!="0.2"
        ) {
            error = true
            errorText = "Root element must have these attributes: xmlns=\"https://spatext.clontz.org\" version=\"0.2\""
        } else {
            latex = latexTransform.transformToDocument(stxDom).querySelector(":scope").textContent.trim()
            html = htmlTransform.transformToDocument(stxDom).querySelector("div.stx").outerHTML.trim()
            pretext = ptxTransform.transformToDocument(stxDom).querySelector(':scope').outerHTML.trim()
            error = false
            errorText = ""
        }
    }
    const containsKnowl = (e:Element) => {
        let children = [...e.childNodes]
        return children.some((node) => node instanceof Element && node.tagName=="knowl")
    }
</script>

<main>
    <h1>SpaTeXt Demo</h1>
    <div style="overflow:hidden">
        <div class="leftBox">
            <textarea bind:value={exampleStx} class:error={error}/>
            {#if errorText != ""}
                <p style="color:red">{errorText}</p>
            {:else}
                <p>
                    Show:
                    <a href="#result" on:click|preventDefault={()=>rightPane="result"}>Result</a> |
                    <a href="#html" on:click|preventDefault={()=>rightPane="html"}>Static HTML</a> |
                    <a href="#latex" on:click|preventDefault={()=>rightPane="latex"}>LaTeX</a> |
                    <a href="#pretext" on:click|preventDefault={()=>rightPane="pretext"}>PreTeXt</a>
                </p>
            {/if}
        </div>
        <div class="rightBox">
            {#if rightPane=="result"}
                {#if stxElement.tagName == "knowl"}
                    <Knowl knowl={stxElement}/>
                {:else if stxElement.tagName == "content"}
                    {#if containsKnowl(stxElement) }
                        <SectionContent content={stxElement}/>
                    {:else}
                        <KnowlContent content={stxElement}/>
                    {/if}
                {:else if stxElement.tagName == "p"}
                    <Paragraph paragraph={stxElement}/>
                {/if}
            {:else if rightPane=="html"}
                <textarea readonly value={html}/>
                <div>
                    {@html html}
                </div>
            {:else if rightPane=="latex"}
                <textarea readonly value={latex}/>
            {:else if rightPane=="pretext"}
                <textarea readonly value={pretext}/>
            {/if}
        </div>
    </div>
</main>

<style>
    main {
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
    }

    @media (min-width: 640px) {
        .leftBox {
            width: 48%; float:left;
        }
        .rightBox {
            width: 48%; float:right;
        }
    }

    textarea {
        width:100%;
        height:30em;
        font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
    }

    .error {
        background-color: rgb(243, 211, 211);
    }
</style>