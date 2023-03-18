import type { ElementSpec, AttrSpec } from '@codemirror/lang-xml'

export const modeSpec:AttrSpec = {
    name: "mode",
    values: [
        "exercise",
        "activity",
        "theorem",
        "conjecture",
        "lemma",
        "definition",
    ],
}

export const idSpec:AttrSpec = {
    name: "id",
}

export const numberSpec:AttrSpec = {
    name: "number",
}

const KnowlSpec:ElementSpec = {
    name: "knowl",
    top: false,
    children: [
        "intro",
        "content",
        "knowl",
        "outtro"
    ],
    attributes: [
        idSpec,
        modeSpec,
        numberSpec,
    ],
}

export default KnowlSpec
