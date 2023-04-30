import type * as Cheerio from 'cheerio'
import ContentSpec from './codeMirror';

interface allowableOpts {
	allowKnowls?: boolean
}
export function allowable (e: Cheerio.Element, opts: allowableOpts): boolean {
	const allowKnowls = (opts.allowKnowls === true)
	const allowed = ContentSpec.children as string[];
	return allowed.includes(e.tagName) && (allowKnowls || e.tagName !== 'knowl');
};