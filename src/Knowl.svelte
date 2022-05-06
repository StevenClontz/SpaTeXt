<script lang="ts">
    export let knowl:Element;
    import Content from'./Content.svelte';
    let showOuttro = false;
</script>

<div style="background-color:#fee;">
    {#each knowl.getElementsByTagName("content") as content}
        <Content {content}/>
    {/each}
</div>
<button on:click={()=>showOuttro=!showOuttro}>Show/hide outtro.</button>
{#if showOuttro}
    <div style="background-color:#eef;">
        {#each knowl.getElementsByTagName("outtro") as content}
            <Content {content}/>
        {/each}
    </div>
{/if}
