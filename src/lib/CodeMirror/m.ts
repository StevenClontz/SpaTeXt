import type { AttrSpec, ElementSpec } from '@codemirror/lang-xml';

const ModeAttr: AttrSpec = {
	name: 'mode',
	values: ['display', 'inline']
};

const MSpec: ElementSpec = {
	name: 'm',
	top: false,
	children: [],
	attributes: [ModeAttr]
};

export default MSpec;
