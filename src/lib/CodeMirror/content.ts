import type { ElementSpec } from '@codemirror/lang-xml'

const ContentSpec:ElementSpec = {
    name: "content",
    top: false,
    children: [
        "p",
        "list",
        "knowl"
    ],
    attributes: [],
}

export default ContentSpec
