<script lang="ts">
    import Math from './Math.svelte';
    export let nodes:NodeList;
</script>

{#each nodes as node}
    {#if node.nodeType == Node.TEXT_NODE}
        {node.textContent}
    {:else if node instanceof Element}
        {#if node.nodeName == "m"}
            <Math latex={node.textContent}/>
        {:else if node.nodeName == "c"}
            <code>{node.textContent}</code>
        {:else if node.nodeName == "em"}
            <em><svelte:self nodes={node.childNodes}/></em>
        {:else if node.nodeName == "q"}
            "<svelte:self nodes={node.childNodes}/>"
        {/if}
    {/if}
{/each}