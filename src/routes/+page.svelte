<script lang="ts">
    import SpaTeXt from '../lib/SpaTeXt.svelte'
    let stx='<p>The Pythagorean Theorem is <me mode="inline">a^2+b^2=c^2.</me></p>\n<p>Foo.</p>'
</script>

<h1>SpaTeXt {__VERSION__}</h1>

<textarea style="width:100%;height:5em" bind:value={stx}/>

<div><SpaTeXt {stx}/></div>
