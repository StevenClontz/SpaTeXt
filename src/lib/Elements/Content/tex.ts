import type * as Cheerio from 'cheerio';
import ChildrenTex from './children.tex';

export const texDefinition = '\\newenvironment{stxContent}{\n\n}{\n\n}';

interface Opts {
	allowKnowls?: boolean;
}
export default (api: Cheerio.CheerioAPI, element: Cheerio.Element, opts: Opts) => {
	const allowKnowls = opts.allowKnowls === true;
	return `\\begin{stxContent}\n${ChildrenTex(api, element, allowKnowls)}\n\\end{stxContent}`;
};
