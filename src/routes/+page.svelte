<script lang="ts">
    import SpaTeXt from '../lib/SpaTeXt.svelte'
    import sampleStx from './sample.stx?raw'
    let stx = sampleStx
    const version = __VERSION__
</script>

<h1>SpaTeXt {version}</h1>

<textarea style="width:100%;height:5em" bind:value={stx}/>

<div><SpaTeXt {stx}/></div>
