<script lang="ts">
    import Knowl from './Knowl.svelte';
    // @ts-ignore
    import exampleStxSource from './xml/example.stx';
    const parser = new DOMParser();
    let exampleStx:string = exampleStxSource
    let knowlDom = parser.parseFromString(exampleStx, "application/xml")
    let knowl: Element
    let error: boolean
    let errorText: string
    $: if (parser.parseFromString(exampleStx, "application/xml").querySelector('parsererror')) {
        error = true
        errorText = "Error parsing XML"
    } else {
        knowlDom = parser.parseFromString(exampleStx, "application/xml")
        knowl = knowlDom.querySelector(":scope")
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
            <Knowl {knowl}/>
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