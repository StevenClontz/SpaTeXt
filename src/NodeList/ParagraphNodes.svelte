<script lang="ts">
    import Math from '../Elements/Math.svelte';
    export let nodes:NodeList;
</script>

{#each nodes as node}
    {#if node.nodeType == Node.TEXT_NODE}
        {node.textContent}
    {:else if node instanceof Element}
        {#if node.nodeName == "m"}
            <Math latex={node.textContent} displayMode={node.getAttribute('mode')=="display"}/>
        {:else if node.nodeName == "me"}
            <Math latex={node.textContent} displayMode/>
        {:else if node.nodeName == "c"}
            <code>{node.textContent}</code>
        {:else if node.nodeName == "em"}
            <em><svelte:self nodes={node.childNodes}/></em>
        {:else if node.nodeName == "q"}
            "<svelte:self nodes={node.childNodes}/>"
        {:else if node.nodeName == "image"}
            <img src={node.getAttribute('remote')+"/"+node.getAttribute('source')} alt={node.getAttribute('description')}/>
        {:else if node.nodeName == "url"}
            <a href={node.getAttribute("href")}>
                {#if node.textContent.trim()===''}
                    {node.getAttribute("href")}
                {:else}
                    <svelte:self nodes={node.childNodes}/>
                {/if}
            </a>
        {/if}
    {/if}
{/each}