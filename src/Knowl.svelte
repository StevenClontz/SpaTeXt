<script lang="ts">
    export let knowl:Element;
    import Part from './Part.svelte';
</script>

{#if knowl.querySelectorAll(":scope > title").length > 0}
    <h3>{knowl.querySelector(":scope > title").textContent}</h3>
{/if}
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