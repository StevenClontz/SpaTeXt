import type { ElementSpec } from '@codemirror/lang-xml';
import PSpec from '../codeMirror';

const EmSpec: ElementSpec = {
	name: 'em',
	top: false,
	children: PSpec.children,
	attributes: []
};

export default EmSpec;
