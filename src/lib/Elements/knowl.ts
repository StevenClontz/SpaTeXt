import type * as Cheerio from 'cheerio'

export const depth = (element:Cheerio.Element,api:Cheerio.CheerioAPI):number => {
    return api(element).parents("knowl").length
}

export const mode = (element:Cheerio.Element,api:Cheerio.CheerioAPI):string => {
    if (api(element).attr("mode")) {
        return api(element).attr("mode") as string
    }
    if (api(element).parent("knowl").length > 0) {
        return mode(api(element).parent("knowl")[0],api) 
    }
    return "knowl"
}

export const label = (element:Cheerio.Element,api:Cheerio.CheerioAPI):string => {
    if (depth(element,api) === 0) {
        if (mode(element,api) === "exercise") {
            return "Exercise"
        } else if (mode(element,api) === "theorem") {
            return "Theorem"
        } else if (mode(element,api) === "activity") {
            return "Activity"
        } else {
            return "Knowl"
        }
    } else {
        if (["exercise","activity"].includes(mode(element,api))) {
            return "Task"
        } else {
            return "Part"
        }
    }
}