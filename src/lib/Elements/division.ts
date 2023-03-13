import type * as Cheerio from 'cheerio'

export const depth = (element:Cheerio.Element,api:Cheerio.CheerioAPI):number => {
    return api(element).parents("division").length
}

export const label = (element:Cheerio.Element,api:Cheerio.CheerioAPI):string => {
    if (api(element).attr("label")) {
        return api(element).attr("label") as string
    }
    if (depth(element,api) === 0) {
        return "Chapter"
    } else if (depth(element,api) === 1) {
        return "Section"
    } else {
        let subsection = "sub".repeat(depth(element,api)-1)+"section"
        return subsection.charAt(0).toUpperCase() + subsection.slice(1);
    }
}

export const numbering = (element:Cheerio.Element,api:Cheerio.CheerioAPI):string => {
    let index = `${api(element).prevAll("division").length+1}`
    if (api(element).attr("number")) {
        index = api(element).attr("number") as string
    }
    if (depth(element,api) === 0) {
        return `${index}`
    } else {
        return `${numbering(api(element).parent("division")[0],api)}.${index}`
    }
}