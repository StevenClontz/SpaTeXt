<script lang="ts">
    import Paragraph from'./Paragraph.svelte';
    export let answer:Element;
</script>

{#each answer.getElementsByTagName("p") as paragraph}
    <Paragraph {paragraph}/>
{/each}

