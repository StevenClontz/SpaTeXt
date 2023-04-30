import type * as Cheerio from 'cheerio';
import { displayMode } from '.';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (displayMode(api,element)) {
		return `\\[${api(element).text()}\\]`
	} else {
		return `\\(${api(element).text()}\\)`
	}
};
