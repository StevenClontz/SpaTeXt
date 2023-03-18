import type * as Cheerio from 'cheerio';
import { mode as knowlMode } from './knowl';

export const mode = (element: Cheerio.Element, api: Cheerio.CheerioAPI): string => {
	return knowlMode(api(element).parent()[0], api);
};

export const label = (element: Cheerio.Element, api: Cheerio.CheerioAPI): string => {
	if (['exercise', 'activity'].includes(mode(element, api))) {
		return 'Solution';
	} else if (['theorem', 'lemma'].includes(mode(element, api))) {
		return 'Proof';
	} else {
		return 'Outtro';
	}
};
