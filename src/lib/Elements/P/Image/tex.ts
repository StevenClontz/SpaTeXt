import type * as Cheerio from 'cheerio';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	return `\\includegraphics{${api(element).attr('source')}}`;
};
