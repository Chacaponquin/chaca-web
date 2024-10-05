import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export const UNIT_CODE = `
modules.science.unit() // 'hertz (Hz)'
modules.science.unit({ type: 'symbol' }) // 'N'
`

export const UNIT_PARAMS: Param[] = [
  {
    name: "type",
    description: "Formato de la unidad de medida",
    params: [],
    required: false,
    default: "'name'",
    types: ["'name'", "'symbol'"],
  },
]
