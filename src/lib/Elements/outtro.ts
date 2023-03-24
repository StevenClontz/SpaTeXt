import type * as Cheerio from 'cheerio';
import { mode as knowlMode } from './knowl';

export const mode = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	return knowlMode(api, api(element).parent()[0]);
};

export const label = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (['exercise', 'activity'].includes(mode(api, element))) {
		return 'Solution';
	} else if (['theorem', 'lemma'].includes(mode(api, element))) {
		return 'Proof';
	} else {
		return 'Outtro';
	}
};
