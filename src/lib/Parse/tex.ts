import type * as Cheerio from 'cheerio';
import { checkTagName } from '.';
import * as tex from '../tex';

export default (
	api: Cheerio.CheerioAPI,
	element: Cheerio.Element,
	allowed: string[] | undefined
) => {
	if (checkTagName(element, 'c', allowed)) {
		return tex.c(api, element);
	} else if (checkTagName(element, 'em', allowed)) {
		return tex.em(api, element);
	}
	return 'element cannot be parsed';
};
