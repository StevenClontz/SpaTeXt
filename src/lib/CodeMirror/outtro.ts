import type { ElementSpec } from '@codemirror/lang-xml';

const OuttroSpec: ElementSpec = {
	name: 'outtro',
	top: false,
	children: ['p', 'list'],
	attributes: []
};

export default OuttroSpec;
