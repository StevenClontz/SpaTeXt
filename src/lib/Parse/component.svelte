<script lang="ts">
	import type * as Cheerio from 'cheerio';
	import * as Elements from '../Elements';
	import { checkTagName } from '.';
	export let element: Cheerio.Element;
	export let allowed: string[] | undefined = undefined;
</script>

{#if checkTagName(element, 'c', allowed)}
	<Elements.C {element} />
{:else if checkTagName(element, 'division', allowed)}
	<Elements.Division {element} />
{:else if checkTagName(element, 'em', allowed)}
	<Elements.Em {element} />
{:else if checkTagName(element, 'image', allowed)}
	<Elements.Image {element} />
{:else if checkTagName(element, 'intro', allowed)}
	<Elements.Intro {element} />
{:else if checkTagName(element, 'item', allowed)}
	<Elements.Item {element} />
{:else if checkTagName(element, 'knowl', allowed)}
	<Elements.Knowl {element} />
{:else if checkTagName(element, 'list', allowed)}
	<Elements.List {element} />
{:else if checkTagName(element, 'm', allowed) || checkTagName(element, 'me', allowed)}
	<Elements.M {element} />
{:else if checkTagName(element, 'outtro', allowed)}
	<Elements.Outtro {element} />
{:else if checkTagName(element, 'p', allowed)}
	<Elements.P {element} />
{:else if checkTagName(element, 'q', allowed)}
	<Elements.Q {element} />
{:else if checkTagName(element, 'title', allowed)}
	<Elements.Title {element} />
{:else if checkTagName(element, 'url', allowed)}
	<Elements.Url {element} />
{:else}
	<span>(element cannot be parsed)</span>
{/if}

<style>
	span {
		color: red;
	}
</style>
