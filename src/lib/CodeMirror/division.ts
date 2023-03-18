import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml'

export const idSpec:AttrSpec = {
    name: "id",
}

export const numberSpec:AttrSpec = {
    name: "number",
}

const DivisionSpec:ElementSpec = {
    name: "division",
    top: false,
    children: [
        "title",
        "intro",
        "content",
        "division",
        "outtro",
    ],
    attributes: [
        idSpec,
        numberSpec,
    ],
}

export default DivisionSpec
