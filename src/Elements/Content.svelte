<script lang="ts">
    import Paragraph from './Paragraph.svelte';
    export let content:Element;
</script>

{#each content.querySelectorAll(":scope > p") as paragraph}
    <Paragraph {paragraph}/>
{/each}
