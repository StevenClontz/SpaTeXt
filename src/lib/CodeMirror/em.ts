import type { ElementSpec } from '@codemirror/lang-xml';
import PSpec from './p';

const EmSpec: ElementSpec = {
	name: 'em',
	top: false,
	children: PSpec.children,
	attributes: []
};

export default EmSpec;
