import type { ElementSpec } from '@codemirror/lang-xml';

const PSpec: ElementSpec = {
	name: 'p',
	top: false,
	children: ['c', 'em', 'image', 'm', 'me', 'q', 'url', 'xref'],
	attributes: []
};

export default PSpec;
