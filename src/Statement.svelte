<script lang="ts">
    import Paragraph from'./Paragraph.svelte';
    export let statement:Element;
</script>

{#each statement.getElementsByTagName("p") as paragraph}
    <Paragraph {paragraph}/>
{/each}