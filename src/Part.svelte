<script lang="ts">
    export let part:Element;
    import Content from'./Content.svelte';
    let showOuttro = false;
    const toggleOuttro = (e:Event) => {
        e.preventDefault()
        showOuttro=!showOuttro
    }
    const isInExercise = (p:Element) => {
        if (p.getAttribute("mode")=="exercise") return true
        if (p.parentElement!=null && p.parentElement.getAttribute("mode")=="exercise") return true
        return false
    }
    let outtroLabel:string
    $: if (isInExercise(part)) {
        outtroLabel = "solution"
    } else {
        outtroLabel = "outtro"
    }
</script>

{#if part.querySelectorAll(":scope > intro").length > 0}
    <Content content={part.querySelector("intro")}/>
{/if}
{#if part.querySelectorAll(":scope > content").length > 0}
    <Content content={part.querySelector(":scope > content")}/>
{:else}
    <ol>
        {#each part.querySelectorAll(":scope > part") as subpart}
            <li class="part">
                <svelte:self part={subpart}/>
            </li>
        {/each}
    </ol>
{/if}
{#if part.querySelectorAll(":scope > outtro").length > 0}
    <p>
        <a class="toggle" href="#toggle" on:click={toggleOuttro}>
            {#if showOuttro}
                &blacktriangledown; Hide
            {:else}
                &blacktriangleright; Show
            {/if}
            {outtroLabel}
        </a>
    </p>
    {#if showOuttro}
        <Content content={part.querySelector(":scope > outtro")}/>
    {/if}
{/if}

<style>
    .toggle {
        color:rgb(100, 100, 100);
        font-size: 0.8em;
    }
</style>