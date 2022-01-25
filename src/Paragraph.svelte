<script lang="ts">
    import Math from './Math.svelte';
    export let paragraph:Element;
</script>

<p>
    {#each paragraph.childNodes as ele}
        {#if ele.nodeType == Node.TEXT_NODE}
            {ele.textContent}
        {:else if ele.nodeName == "m"}
            <Math latex={ele.textContent}/>
        {:else if ele.nodeName == "em"}
            <strong>{ele.textContent}</strong>
        {/if}
    {/each}
</p>