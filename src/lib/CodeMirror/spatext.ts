import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml';

export const versionSpec: AttrSpec = {
	name: 'version',
	values: ['0.3']
};
export const xmlnsSpec: AttrSpec = {
	name: 'xmlns',
	values: ['https://spatext.clontz.org']
};

export const SpaTeXtSpec: ElementSpec = {
	name: 'spatext',
	top: true,
	children: ['title', 'division', 'content', 'knowl'],
	attributes: [versionSpec, xmlnsSpec]
};

export default SpaTeXtSpec;
