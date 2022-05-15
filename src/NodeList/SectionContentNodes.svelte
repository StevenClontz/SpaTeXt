<script lang="ts">
    import Paragraph from '../Elements/Paragraph.svelte'
    import Knowl from '../Elements/Knowl.svelte'
    export let nodes:NodeList
</script>

{#each nodes as node}
    {#if node instanceof Element}
        {#if node.nodeName == "p"}
            <Paragraph paragraph={node}/>
        {:else if node.nodeName == "knowl"}
            <Knowl knowl={node}/>
        {/if}
    {/if}
{/each}