<script lang="ts">
    export let knowl:Element
    import Part from './Part.svelte'
    import TitleNodes from './TitleNodes.svelte'
    let mode:string
    let label:string
    $: mode = knowl.getAttribute("mode")
    $: if (mode=="exercise") {
        label = "Exercise"
    } else {
        label = "Knowl"
    }
</script>

<h3>
    {label}{#if knowl.querySelectorAll(":scope > title").length > 0}:
        <TitleNodes nodes={knowl.querySelector(":scope > title").childNodes}/>
    {:else}.{/if}
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
        padding: 10px;
    }
</style>