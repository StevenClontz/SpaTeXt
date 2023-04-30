import type * as Cheerio from 'cheerio';

export const depth = (api: Cheerio.CheerioAPI, element: Cheerio.Element): number => {
	return api(element).parents('division').length;
};

export const numbering = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	let index = `${api(element).prevAll('division').length + 1}`;
	if (api(element).attr('number')) {
		index = api(element).attr('number') as string;
	}
	if (depth(api, element) === 0) {
		return `${index}`;
	} else {
		return `${numbering(api, api(element).parent('division')[0])}.${index}`;
	}
};

export const label = (api: Cheerio.CheerioAPI, element: Cheerio.Element): string => {
	if (api(element).attr('label')) {
		return `${api(element).attr('label') as string} ${numbering(api, element)}`;
	}
	if (depth(api, element) === 0) {
		return `Chapter ${numbering(api, element)}`;
	} else {
		const subsection = 'sub'.repeat(depth(api, element) - 1) + 'section';
		return `S${subsection.slice(1)} ${numbering(api, element)}`;
	}
};
