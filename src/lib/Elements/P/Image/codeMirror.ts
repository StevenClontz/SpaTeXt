import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml';

export const remoteSpec: AttrSpec = {
	name: 'remote'
};
export const sourceSpec: AttrSpec = {
	name: 'source'
};

const ImageSpec: ElementSpec = {
	name: 'image',
	top: false,
	children: [],
	attributes: [remoteSpec, sourceSpec]
};

export default ImageSpec;
