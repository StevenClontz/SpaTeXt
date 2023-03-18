import type * as Cheerio from 'cheerio';
import { numbering as divisionNumbering } from './division';

export const depth = (element: Cheerio.Element, api: Cheerio.CheerioAPI): number => {
	return api(element).parents('knowl').length;
};

export const mode = (element: Cheerio.Element, api: Cheerio.CheerioAPI): string => {
	if (api(element).attr('mode')) {
		return api(element).attr('mode') as string;
	}
	if (api(element).parent('knowl').length > 0) {
		return mode(api(element).parent('knowl')[0], api);
	}
	return 'knowl';
};

export const numbering = (element: Cheerio.Element, api: Cheerio.CheerioAPI): string => {
	let index = `${api(element).prevAll('knowl').length + 1}`;
	if (api(element).attr('number')) {
		index = api(element).attr('number') as string;
	}
	if (depth(element, api) > 0) {
		return `${numbering(api(element).parent('knowl')[0], api)}.${index}`;
	}
	if (api(element).parents('division').length === 0) {
		return `${index}`;
	} else {
		return (
			divisionNumbering(api(element).closest('division')[0] as Cheerio.Element, api) + `.${index}`
		);
	}
};

export const label = (element: Cheerio.Element, api: Cheerio.CheerioAPI): string => {
	if (api(element).attr('label')) {
		return `${api(element).attr('label')} ${numbering(element, api)}`;
	}
	if (depth(element, api) === 0) {
		if (mode(element, api) === 'exercise') {
			return `Exercise ${numbering(element, api)}`;
		} else if (mode(element, api) === 'activity') {
			return `Activity ${numbering(element, api)}`;
		} else if (mode(element, api) === 'theorem') {
			return `Theorem ${numbering(element, api)}`;
		} else if (mode(element, api) === 'lemma') {
			return `Lemma ${numbering(element, api)}`;
		} else if (mode(element, api) === 'conjecture') {
			return `Conjecture ${numbering(element, api)}`;
		} else if (mode(element, api) === 'definition') {
			return `Definition ${numbering(element, api)}`;
		} else {
			return `Knowl ${numbering(element, api)}`;
		}
	} else {
		if (['exercise', 'activity'].includes(mode(element, api))) {
			return `Task ${numbering(element, api)}`;
		} else {
			return `Part ${numbering(element, api)}`;
		}
	}
};
