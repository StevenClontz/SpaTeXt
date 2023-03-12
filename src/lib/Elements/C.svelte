<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import { CheerioDoc } from '../stores'
    export let element:Cheerio.Element
</script>

<code>{$CheerioDoc(element).text()}</code>
