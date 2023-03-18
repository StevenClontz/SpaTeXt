import type { ElementSpec } from '@codemirror/lang-xml'

const ItemSpec:ElementSpec = {
    name: "item",
    top: false,
    children: [
        "p",
        "list",
    ],
    attributes: [],
}

export default ItemSpec
