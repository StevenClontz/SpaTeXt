import type * as Cheerio from 'cheerio';
import { label as knowlLabel } from './knowl';
import { label as divisionLabel } from './division';

export const elementLookup = (
	api: Cheerio.CheerioAPI,
	xrefId: string | undefined
): Cheerio.Element | undefined => {
	if (xrefId !== undefined) {
		let xrefElements = api(`*[id=${xrefId}]`);
		if (xrefElements.length > 0) {
			return xrefElements[0] as Cheerio.Element;
		} else {
			return undefined;
		}
	} else {
		return undefined;
	}
};

export const labelLookup = (api: Cheerio.CheerioAPI, xrefId: string | undefined): string => {
	const e = elementLookup(api, xrefId);
	if (e === undefined || xrefId === undefined) {
		return 'Unknown ID';
	} else if (e.tagName === 'knowl') {
		return knowlLabel(e, api);
	} else if (e.tagName === 'division') {
		return divisionLabel(e, api);
	} else {
		return xrefId;
	}
};
