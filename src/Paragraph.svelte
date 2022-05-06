<script lang="ts">
    import Math from './Math.svelte';
    export let paragraph:Element;
</script>

<p>
    {#each paragraph.childNodes as node}
        {#if node.nodeType == Node.TEXT_NODE}
            {node.textContent}
        {:else if node instanceof Element}
            {#if node.nodeName == "m"}
                <Math latex={node.textContent} displayMode={node.getAttribute('mode')=="display"}/>
            {:else if node.nodeName == "me"}
                <Math latex={node.textContent} displayMode/>
            {:else if node.nodeName == "em"}
                <strong>{node.textContent}</strong>
            {/if}
        {/if}
    {/each}
</p>