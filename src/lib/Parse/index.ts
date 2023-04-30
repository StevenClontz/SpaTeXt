import type * as Cheerio from 'cheerio';

export function checkTagName(
	e: Cheerio.Element,
	name: string,
	allowed: string[] | undefined
): boolean {
	if (e.tagName === name) {
		if (allowed === undefined || allowed.includes(name)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
