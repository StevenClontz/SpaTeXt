import type { ElementSpec } from '@codemirror/lang-xml'

const IntroSpec:ElementSpec = {
    name: "intro",
    top: false,
    children: [
        "p",
        "list",
    ],
    attributes: [],
}

export default IntroSpec
