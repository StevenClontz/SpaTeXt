<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor"
    import { xml } from "@codemirror/lang-xml";
    export let value:string
    const styles={
        "&": {
            "border":"1px solid #aaa",
            "max-height":"30em"
        }
    }
</script>

<CodeMirror 
    bind:value={value} 
    lang={xml()} 
    tabSize={4} 
    {styles}/>