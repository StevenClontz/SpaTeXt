<script lang="ts">
    import SpaTeXt from '../lib'
    import sampleStx from './sample.stx?raw'
    import CodeMirror from "svelte-codemirror-editor"
    import { xml } from "@codemirror/lang-xml";
    let stx = sampleStx
    const version = __VERSION__
</script>

<svelte:head>
	<title>SpaTeXt Demo</title>
</svelte:head>

<h1>SpaTeXt {version}</h1>
<h3 style="color:#444">Simplified PreTeXt for Apps <small>— <a href="https://github.com/StevenClontz/SpaTeXt">GitHub</a></small></h3>

<div class="flex-container">
    <div class="column"><CodeMirror bind:value={stx} lang={xml()} tabSize={4} styles={{"&":{border:"1px solid #aaa"}}}/></div>
    <div class="column"><SpaTeXt {stx}/></div>
</div>

<style>
    .flex-container{
        width: 100%;
        min-height: 300px;
        margin: 0 auto;
        display: -webkit-flex; /* Safari */		
        display: flex; /* Standard syntax */
    }
    .flex-container .column{
        width: 50%;
        padding: 10px;
        -webkit-flex: 1; /* Safari */
        -ms-flex: 1; /* IE 10 */
        flex: 1; /* Standard syntax */
    }
</style>