import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml'

export const modeSpec:AttrSpec = {
    name: "mode",
    values: [
        "ordered",
        "unordered",
    ],
}

const ListSpec:ElementSpec = {
    name: "list",
    top: false,
    children: [
        "item",
    ],
    attributes: [
        modeSpec,
    ],
}

export default ListSpec
