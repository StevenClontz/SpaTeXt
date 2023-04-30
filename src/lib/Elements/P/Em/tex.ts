import type * as Cheerio from 'cheerio';
import parse from '../../../Parse/tex';

export const newcommand = '\\newcommand{\\stxEm}[1]{\\textit{$1}}';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	return `\\stxEm{${parse(api,element,undefined)}}`;
};
