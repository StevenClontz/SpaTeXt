import type * as Cheerio from 'cheerio';
import { labelLookup } from '.';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	return labelLookup(api,api(element).attr('ref'));
};
