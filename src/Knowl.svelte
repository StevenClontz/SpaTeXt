<script lang="ts">
    export let knowl:Element;
    import Content from'./Content.svelte';
    let showOuttro = false;
</script>

{#each knowl.getElementsByTagName("content") as content}
    <div class="content">
        <Content {content}/>
    </div>
{/each}
<button on:click={()=>showOuttro=!showOuttro}>Show/hide outtro.</button>
{#if showOuttro}
    {#each knowl.getElementsByTagName("outtro") as content}
        <div class="outtro">
            <Content {content}/>
        </div>
    {/each}
{/if}

<style>
    .content {
        border-color: rgb(0, 0, 0);
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        padding: 10px;
    }
    .outtro {
        border-color: rgb(68, 68, 255);
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        padding: 10px;
    }
</style>