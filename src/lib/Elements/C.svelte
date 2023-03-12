<script lang="ts">
    import * as Cheerio from 'cheerio'
    export let element:Cheerio.Element
</script>

<code>{Cheerio.load(element).text()}</code>
