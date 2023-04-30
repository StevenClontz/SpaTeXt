import type * as Cheerio from 'cheerio';

export const displayMode = (api: Cheerio.CheerioAPI, element: Cheerio.Element): boolean => {
    if (api(element).parent()[0].tagName === 'title') {
		return false;
	} else if (element.tagName == 'me') {
		return api(element).attr('mode') !== 'inline';
	} else if (element.tagName == 'm') {
		return api(element).attr('mode') === 'display';
	} else {
		return false;
	}
};
