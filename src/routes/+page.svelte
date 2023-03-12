<script lang="ts">
    import SpaTeXt from '../lib/SpaTeXt.svelte'
    let stx='<p>The Pythagorean Theorem is <me mode="inline">a^2+b^2=c^2.</me></p>\n<p>Foo.</p>'
</script>


<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<textarea style="width:100%;height:5em" bind:value={stx}/>

<div><SpaTeXt {stx}/></div>
