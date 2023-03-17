<script lang="ts">
    export let collapsed:boolean
    export let collapseLabel = "Collapse"
    export let expandLabel = "Expand"
    const toggleCollapsed = (e:Event) => {
        e.preventDefault()
        collapsed=!collapsed
    }
</script>

<button class="toggle" on:keypress={toggleCollapsed} on:click={toggleCollapsed}>
    {#if collapsed}▸{expandLabel}{:else}▾{collapseLabel}{/if}
</button>

<style>
    .toggle {
        color:#444;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: normal;
    }
</style>
