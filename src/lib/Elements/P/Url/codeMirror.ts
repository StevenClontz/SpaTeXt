import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml';
import PSpec from '../codeMirror';

export const hrefSpec: AttrSpec = {
	name: 'href'
};

const UrlSpec: ElementSpec = {
	name: 'url',
	top: false,
	children: PSpec.children,
	attributes: [hrefSpec]
};

export default UrlSpec;
