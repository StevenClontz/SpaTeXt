<script lang="ts">
    export let exerciseDom:XMLDocument;
    import Statement from'./Statement.svelte';
    import Answer from'./Answer.svelte';
    let showAnswer = false;
</script>

<div style="background-color:#fee;">
    <Statement statement={exerciseDom.getElementsByTagName("statement")[0]}/>
</div>
<button on:click={()=>showAnswer=!showAnswer}>Show/hide answer.</button>
{#if showAnswer}
    <div style="background-color:#eef;">
        <Answer answer={exerciseDom.getElementsByTagName("answer")[0]}/>
    </div>
{/if}