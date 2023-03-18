import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml';

export const refSpec: AttrSpec = {
	name: 'ref'
};

export const XrefSpec: ElementSpec = {
	name: 'xref',
	top: false,
	children: [],
	attributes: [refSpec]
};

export default XrefSpec;
