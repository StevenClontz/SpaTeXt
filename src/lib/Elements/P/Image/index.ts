import type * as Cheerio from 'cheerio';

export const buildSrc = (api:Cheerio.CheerioAPI, element: Cheerio.Element): string => {
    if (api(element).attr('remote')) {
        return api(element).attr('remote') + '/' + api(element).attr('source');
    } else {
        return './' + api(element).attr('source');
    }
}