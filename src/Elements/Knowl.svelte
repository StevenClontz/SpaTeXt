<script lang="ts">
    export let knowl:Element
    import Part from './Part.svelte'
    import Title from './Title.svelte'
    let mode:string
    let label:string
    $: title = knowl.querySelector(":scope > title")
    $: mode = knowl.getAttribute("mode")
    $: if (mode=="exercise") {
        label = "Exercise"
    } else {
        label = "Knowl"
    }
</script>

<h3>
    {label}{#if title}: <Title {title}/>{:else}.{/if}
</h3>
<div class="knowl">
    <Part part={knowl}/>
</div>

<style>
    .knowl {
        border-color: rgb(0, 0, 0);
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        padding: 0 1em;
        margin: 1em 0;
    }
</style>