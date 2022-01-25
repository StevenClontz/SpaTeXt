<script lang="ts">
    import katex from 'katex';
    export let latex:string;
</script>

<span class="math">
    {@html katex.renderToString(latex,{throwOnError:false})}
</span>

<style>
    .math {background-color:#efe}
</style>