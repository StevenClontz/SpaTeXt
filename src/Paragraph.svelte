<script lang="ts">
    import ParagraphNodes from './ParagraphNodes.svelte'
    export let paragraph:Element;
</script>

<p>
    <ParagraphNodes nodes={paragraph.childNodes}/>
</p>