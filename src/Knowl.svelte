<script lang="ts">
    export let knowl:Element;
    import Content from'./Content.svelte';
    let showOuttro = false;
</script>

{#each knowl.getElementsByTagName("content") as content}
    <div class="content">
        <Content {content}/>
        <p>
            <button on:click={()=>showOuttro=!showOuttro}>
                {#if showOuttro}
                    Hide
                {:else}
                    Show
                {/if}
                outtro
            </button>
        </p>
        {#if showOuttro}
            {#each knowl.getElementsByTagName("outtro") as content}
                <hr/>
                <div class="outtro">
                    <Content {content}/>
                </div>
            {/each}
        {/if}
    </div>
{/each}

<style>
    .content {
        border-color: rgb(0, 0, 0);
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        padding: 10px;
    }
</style>