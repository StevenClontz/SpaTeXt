import type * as Cheerio from 'cheerio';
import parse from '../../../Parse/tex';

export const newcommand = '\\newcommand{\\stxQ}[1]{``$1\'\'}}';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	return `\\stxQ{${parse(api,element,undefined)}}`;
};
