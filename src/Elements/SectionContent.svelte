<script lang="ts">
    import SectionContentNodes from "../NodeList/SectionContentNodes.svelte"
    export let content:Element;
</script>

<SectionContentNodes nodes={content.childNodes}/>
