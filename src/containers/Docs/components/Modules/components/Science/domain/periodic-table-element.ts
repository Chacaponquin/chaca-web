import { Param } from "@markdown/components/Markdown/components/Params/domain"

export const PERIODIC_TABLE_ELEMENT_CODE = `
modules.science.periodicTableElement() // 'Curium'
modules.science.periodicTableElement({ type: 'symbol' }) // 'Zn'
`

export const PERIODIC_TABLE_ELEMENT_PARAMS: Param[] = [
  {
    name: "type",
    description: { es: "Formato del elemento", en: "Element format" },
    params: [],
    required: false,
    default: "'name'",
    types: ["'name'", "'symbol'"],
  },
]
