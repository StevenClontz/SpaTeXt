import type { ElementSpec } from '@codemirror/lang-xml'

export const TitleSpec:ElementSpec = {
    name: "title",
    top: false,
    children: [
        "c",
        "m",
    ],
    attributes: [],
}

export default TitleSpec
