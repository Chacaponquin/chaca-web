import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export const PERIODIC_TABLE_ELEMENT_CODE = `
modules.science.periodicTableElement() // 'Curium'
modules.science.periodicTableElement({ type: 'symbol' }) // 'Zn'
`

export const PERIODIC_TABLE_ELEMENT_PARAMS: Param[] = [
  {
    name: "type",
    description: "Formato del elemento",
    params: [],
    required: false,
    default: "'name'",
    types: ["'name'", "'symbol'"],
  },
]
