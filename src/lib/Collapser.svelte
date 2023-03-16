<script lang="ts">
    export let collapsed:boolean
    export let collapseLabel = "Collapse"
    export let expandLabel = "Expand"
    const toggleCollapsed = (e:Event) => {
        e.preventDefault()
        collapsed=!collapsed
    }
</script>

<a class="toggle" href="." on:keypress={toggleCollapsed} on:click={toggleCollapsed}>
    {#if collapsed}▸{expandLabel}{:else}▾{collapseLabel}{/if}
</a>

<style>
    a.toggle {
        color:#888;
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: normal;
    }
</style>
