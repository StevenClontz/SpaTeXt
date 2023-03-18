<script lang="ts">
    import type * as Cheerio from 'cheerio'
    import * as Elements from './Elements'
    export let element:Cheerio.Element
    export let allowed:string[]|undefined=undefined
    const checkTagName = (e:Cheerio.Element,name:string):boolean => {
        if (e.tagName === name) {
            if (allowed === undefined || allowed.includes(name) ) {
                return true
            } else {
                return false
            }
        } else { 
            return false
        }
    }
</script>

{#if checkTagName(element,"c")}
    <Elements.C {element}/>
{:else if checkTagName(element,"content")}
    <Elements.Content {element}/>
{:else if checkTagName(element,"division")}
    <Elements.Division {element}/>
{:else if checkTagName(element,"em")}
    <Elements.Em {element}/>
{:else if checkTagName(element,"image")}
    <Elements.Image {element}/>
{:else if checkTagName(element,"intro")}
    <Elements.Intro {element}/>
{:else if checkTagName(element,"item")}
    <Elements.Item {element}/>
{:else if checkTagName(element,"knowl")}
    <Elements.Knowl {element}/>
{:else if checkTagName(element,"list")}
    <Elements.List {element}/>
{:else if checkTagName(element,"m") || checkTagName(element,"me")}
    <Elements.M {element}/>
{:else if checkTagName(element,"outtro")}
    <Elements.Intro {element}/>
{:else if checkTagName(element,"p")}
    <Elements.P {element}/>
{:else if checkTagName(element,"q")}
    <Elements.Q {element}/>
{:else if checkTagName(element,"title")}
    <Elements.Title {element}/>
{:else if checkTagName(element,"url")}
    <Elements.Url {element}/>
{/if}
