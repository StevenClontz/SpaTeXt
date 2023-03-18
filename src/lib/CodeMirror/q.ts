import type { ElementSpec } from '@codemirror/lang-xml';
import PSpec from './p';

const QSpec: ElementSpec = {
	name: 'q',
	top: false,
	children: PSpec.children,
	attributes: []
};

export default QSpec;
