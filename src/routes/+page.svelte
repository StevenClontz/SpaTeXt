<script lang="ts">
    import SpaTeXt from '../lib/SpaTeXt.svelte'
    let stx='<p>The Pythagorean Theorem is <me mode="inline">a^2+b^2=c^2.</me></p>\n<p>Foo.</p>'
    const version = __VERSION__
</script>

<h1>SpaTeXt {version}</h1>

<textarea style="width:100%;height:5em" bind:value={stx}/>

<div><SpaTeXt {stx}/></div>
