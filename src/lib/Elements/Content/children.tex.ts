import type * as Cheerio from 'cheerio';
import Parse from '../../Parse/tex';
import { allowable } from './children';

export default (api: Cheerio.CheerioAPI, element: Cheerio.Element, allowKnowls: boolean) => {
	return element.children
		.filter((child) => allowable(child as Cheerio.Element, { allowKnowls: allowKnowls }))
		.map((child) => Parse(api, child as Cheerio.Element, undefined))
		.reduce((p, c) => p + c);
};
