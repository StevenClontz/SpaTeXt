<script lang="ts">
    import SectionContent from './Elements/SectionContent.svelte'
    import Knowl from './Elements/Knowl.svelte'
    import KnowlContent from './Elements/KnowlContent.svelte'
    import Paragraph from './Elements/Paragraph.svelte'
    import Part from './Elements/Part.svelte'
    // @ts-ignore
    import exampleStxSource from './xml/example.stx'
    // @ts-ignore
    import latexXsl from './xml/latex.xsl'
    // @ts-ignore
    import htmlXsl from './xml/html.xsl'

    const parser = new DOMParser()
    let exampleStx:string = exampleStxSource
    let stxDom = parser.parseFromString(exampleStx, "application/xml")

    const latexTransform = new XSLTProcessor()
    const latexXslDom = parser.parseFromString(latexXsl, "application/xml")
    latexTransform.importStylesheet(latexXslDom)

    const htmlTransform = new XSLTProcessor()
    const htmlXslDom = parser.parseFromString(htmlXsl, "application/xml")
    htmlTransform.importStylesheet(htmlXslDom)

    let rightPane = "result"
    let stxElement: Element
    let latex: string
    let html: string
    let error: boolean
    let errorText: string
    $: if (parser.parseFromString(exampleStx, "application/xml").querySelector('parsererror')) {
        error = true
        errorText = "Error parsing XML"
    } else {
        stxDom = parser.parseFromString(exampleStx, "application/xml")
        stxElement = stxDom.querySelector(":scope")
        latex = latexTransform.transformToDocument(stxDom).querySelector(":scope").textContent.trim()
        html = htmlTransform.transformToDocument(stxDom).querySelector("body > *").outerHTML
        if (
            stxElement.namespaceURI!="https://spatext.clontz.org" || 
            stxElement.getAttribute("version")!="0.2"
        ) {
            error = true
            errorText = "Root element must have these attributes: xmlns=\"https://spatext.clontz.org\" version=\"0.2\""
        } else {
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
            <p>
                <textarea bind:value={exampleStx} class:error={error}/>
            </p>
            {#if errorText != ""}
                <p style="color:red">{errorText}</p>
            {/if}
        </div>
        <div class="rightBox">
            <p>
                Show:
                <a href="#result" on:click|preventDefault={()=>rightPane="result"}>Result</a> |
                <a href="#html" on:click|preventDefault={()=>rightPane="html"}>Static HTML</a> |
                <a href="#latex" on:click|preventDefault={()=>rightPane="latex"}>LaTeX</a>
            </p>
            {#if rightPane=="result"}
                {#if stxElement.tagName == "knowl"}
                    <Knowl knowl={stxElement}/>
                {:else if stxElement.tagName == "part"}
                    <Part part={stxElement}/>
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
                <pre>{html}</pre>
                <div>
                    {@html html}
                </div>
            {:else if rightPane=="latex"}
                <pre>{latex}</pre>
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
    }

    .error {
        background-color: rgb(243, 211, 211);
    }
</style>