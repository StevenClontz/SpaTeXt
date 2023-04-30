import type * as Cheerio from 'cheerio';
import parse from '../../../Parse/tex';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (api(element).text() === '') {
		return `\\url{${api(element).attr('href')}`
	} else {
		return `\\href{${api(element).attr('href')}{${parse(api,element,undefined)}}`;
	}
};
