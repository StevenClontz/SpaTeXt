<script lang="ts">
    import Knowl from './Knowl.svelte';
    // @ts-ignore
    import exampleStxSource from './example.stx';
    const parser = new DOMParser();
    let exampleStx:string = exampleStxSource
    let knowlDom = parser.parseFromString(exampleStx, "application/xml")
    let knowl: Element
    let error: boolean
    $: if (!parser.parseFromString(exampleStx, "application/xml").querySelector('parsererror')) {
        knowlDom = parser.parseFromString(exampleStx, "application/xml")
        knowl = knowlDom.getElementsByTagName("knowl")[0]
        error = false
    } else {
        error = true
    }
</script>

<main>
    <h1>SpaTeXt Demo</h1>
    <div style="overflow:hidden">
        <div class="leftBox">
            <textarea bind:value={exampleStx} class:error={error}/>
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