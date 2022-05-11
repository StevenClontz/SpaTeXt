<script lang="ts">
    export let part:Element;
    import Content from'./Content.svelte';
    let showOuttro = false;
    const toggleOuttro = (e:Event) => {
        e.preventDefault()
        showOuttro=!showOuttro
    }
</script>

{#if part.querySelectorAll(":scope > intro").length > 0}
    <Content content={part.querySelector("intro")}/>
{/if}
{#if part.querySelectorAll(":scope > content").length > 0}
    <Content content={part.querySelector(":scope > content")}/>
{:else}
    {#each part.querySelectorAll(":scope > part") as subpart}
        <div class="part">
            <svelte:self part={subpart}/>
        </div>
    {/each}
{/if}
{#if part.querySelectorAll(":scope > outtro").length > 0}
    <p>
        <a class="toggle" href="#toggle" on:click={toggleOuttro}>
            {#if showOuttro}
                &blacktriangledown; Hide
            {:else}
                &blacktriangleright; Show
            {/if}
            outtro
        </a>
    </p>
    {#if showOuttro}
        <Content content={part.querySelector(":scope > outtro")}/>
    {/if}
{/if}

<style>
    .part {
        border-left-color: rgb(0, 0, 0);
        border-left-width: 1px;
        border-left-style: solid;
        padding: 5px;
        margin-bottom:1em;
    }
    .toggle {
        color:rgb(100, 100, 100);
        font-size: 0.8em;
    }
</style>