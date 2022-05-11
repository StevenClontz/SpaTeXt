<script lang="ts">
    import Knowl from './Knowl.svelte';

    let xmlString=`
<knowl mode="exercise">
    <content>
        <p>Some inline math <m>x^2+y^2=z^2</m>.</p>
        <p>Some display math <m mode="display">\\sum_{k=0}^n k=\\frac{n(n+1)}{2}</m></p>
        <p>
Hey check out <url href="https://checkit.clontz.org"><em>CheckIt</em></url>.
It's at <url href="https://checkit.clontz.org"/>.
        </p>
        </content>
    <outtro mode="answer">
        <p>I guess an answer <em>should</em> go here.</p>
    </outtro>
</knowl>
`.trim();
    const parser = new DOMParser();
    let knowlDom = parser.parseFromString(xmlString, "application/xml")
    let knowl: Element
    let error: boolean
    $: if (!parser.parseFromString(xmlString, "application/xml").querySelector('parsererror')) {
        knowlDom = parser.parseFromString(xmlString, "application/xml")
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
            <textarea bind:value={xmlString} class:error={error}/>
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
        height:15em;
    }

    .error {
        background-color: rgb(243, 211, 211);
    }
</style>