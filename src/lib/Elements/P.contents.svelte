<script lang="ts">
    import * as C from 'cheerio'
    import M from './M.svelte'
    export let element:C.Element
</script>

{#each C.load(element)("*:first").contents() as child}
    {#if !("tagName" in child)}
        {C.load(child).text()}
    {:else if child.tagName === "m" || child.tagName === "me"}
        <M element={child}/>
    {:else if child.tagName === "em"}
        <em><svelte:self element={child}/></em>
    {:else if child.tagName === "c"}
        <code>{C.load(child).text()}</code>
    {:else if child.tagName === "q"}
        "<svelte:self element={child}/>"
    {:else if child.tagName === "image"}
        <img 
            style="max-width:100%" 
            src={child.attribs["source"]} 
            alt={child.attribs["description"]}
        />
    {:else if child.tagName === "url"}
        <a href={child.attribs["href"]}>
            {#if C.load(child).text()===''}
                {child.attribs["href"]}
            {:else}
                <svelte:self element={child}/>
            {/if}
        </a>
    {/if}
{/each}