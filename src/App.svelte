<script lang="ts">
    import Knowl from './Knowl.svelte'
    // @ts-ignore
    import exampleStxSource from './xml/example.stx'
    // @ts-ignore
    import latexXsl from './xml/latex.xsl'
    // @ts-ignore
    import htmlXsl from './xml/html.xsl'

    const parser = new DOMParser()
    let exampleStx:string = exampleStxSource
    let knowlDom = parser.parseFromString(exampleStx, "application/xml")

    const latexTransform = new XSLTProcessor()
    const latexXslDom = parser.parseFromString(latexXsl, "application/xml")
    latexTransform.importStylesheet(latexXslDom)

    const htmlTransform = new XSLTProcessor()
    const htmlXslDom = parser.parseFromString(htmlXsl, "application/xml")
    htmlTransform.importStylesheet(htmlXslDom)

    let rightPane = "result"
    let knowl: Element
    let latex: string
    let html: string
    let error: boolean
    let errorText: string
    $: if (parser.parseFromString(exampleStx, "application/xml").querySelector('parsererror')) {
        error = true
        errorText = "Error parsing XML"
    } else {
        knowlDom = parser.parseFromString(exampleStx, "application/xml")
        knowl = knowlDom.querySelector(":scope")
        latex = latexTransform.transformToDocument(knowlDom).querySelector(":scope").textContent.trim()
        html = htmlTransform.transformToDocument(knowlDom).querySelector("div").outerHTML
        if (
            knowl.tagName!="knowl" ||
            knowl.namespaceURI!="https://spatext.clontz.org" || 
            knowl.getAttribute("version")!="0.2"
        ) {
            error = true
            errorText = "Root element must be <knowl xmlns=\"https://spatext.clontz.org\" version=\"0.2\">"
        } else {
            error = false
            errorText = ""
        }
    }
</script>

<main>
    <h1>SpaTeXt Demo</h1>
    <div style="overflow:hidden">
        <div class="leftBox">
            <textarea bind:value={exampleStx} class:error={error}/>
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
                <Knowl {knowl}/>
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