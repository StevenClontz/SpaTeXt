import type * as Cheerio from 'cheerio';

export const newcommand = '\\newcommand{\\stxC}[1]{\\texttt{$1}}';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element) => {
	return `\\stxC{${api(element).text()}}`;
};
