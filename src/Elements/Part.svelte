<script lang="ts">
    import Content from './Content.svelte';
    export let part:Element;
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
    let partLabel:string
    $: if (isInExercise(part)) {
        outtroLabel = "solution"
        partLabel = "Task"
    } else {
        outtroLabel = "outtro"
        partLabel = "Part"
    }
    const numbering = (p:Element) => {
        let parentPart = p.parentElement
        if (p.tagName!="part") {
            return ""
        } else {
            let base = numbering(parentPart)
            if (base!="") {
                base = base+"."
            }
            let siblings = [...parentPart.querySelectorAll("part")]
            return base + (siblings.indexOf(p)+1).toString()
        }
    }
</script>

{#if numbering(part)!=""}
    <h5>{partLabel} {numbering(part)}.</h5>
{/if}
{#if part.querySelector(":scope > intro")!=null}
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
    <div class="outtro">
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
    </div>
{/if}

<style>
    .toggle {
        color:rgb(100, 100, 100);
        font-size: 0.8em;
    }
    ol {
        list-style: none;
    }
    .outtro {
        border-color: rgb(90, 90, 90);
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        padding: 0 1em;
        margin: 1em 0;
    }
</style>