import type * as Cheerio from 'cheerio';
import parse from '../../Parse/tex';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	let result = "\n\n";
	api(element).contents().each((_,child) => {
		if (!('tagName' in child)) {
			result += api(child).text();
		} else {
			result += parse(api,child,undefined);
		}
	})
	result += "\n\n";
	return result
};
