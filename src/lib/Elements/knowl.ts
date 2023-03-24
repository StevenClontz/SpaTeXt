import type * as Cheerio from 'cheerio';
import { numbering as divisionNumbering } from './division';

export const depth = (api: Cheerio.CheerioAPI, element: Cheerio.Element): number => {
	return api(element).parents('knowl').length;
};

export const mode = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (api(element).attr('mode')) {
		return api(element).attr('mode') as string;
	}
	if (api(element).parent('knowl').length > 0) {
		return mode(api, api(element).parent('knowl')[0]);
	}
	return 'knowl';
};

export const numbering = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	let index = `${api(element).prevAll('knowl').length + 1}`;
	if (api(element).attr('number')) {
		index = api(element).attr('number') as string;
	}
	if (depth(api, element) > 0) {
		return `${numbering(api, api(element).parent('knowl')[0])}.${index}`;
	}
	if (api(element).parents('division').length === 0) {
		return `${index}`;
	} else {
		return (
			divisionNumbering(api, api(element).closest('division')[0] as Cheerio.Element) + `.${index}`
		);
	}
};

export const label = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (api(element).attr('label')) {
		return `${api(element).attr('label')} ${numbering(api, element)}`;
	}
	if (depth(api, element) === 0) {
		if (mode(api, element) === 'exercise') {
			return `Exercise ${numbering(api, element)}`;
		} else if (mode(api, element) === 'activity') {
			return `Activity ${numbering(api, element)}`;
		} else if (mode(api, element) === 'theorem') {
			return `Theorem ${numbering(api, element)}`;
		} else if (mode(api, element) === 'lemma') {
			return `Lemma ${numbering(api, element)}`;
		} else if (mode(api, element) === 'conjecture') {
			return `Conjecture ${numbering(api, element)}`;
		} else if (mode(api, element) === 'definition') {
			return `Definition ${numbering(api, element)}`;
		} else {
			return `Knowl ${numbering(api, element)}`;
		}
	} else {
		if (['exercise', 'activity'].includes(mode(api, element))) {
			return `Task ${numbering(api, element)}`;
		} else {
			return `Part ${numbering(api, element)}`;
		}
	}
};
