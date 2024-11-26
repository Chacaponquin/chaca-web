import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export const PARAGRAPH_CODE = `
modules.lorem.paragraph()
`

export const PARAGRAPH_PARAMS: Param[] = [
  {
    name: "count",
    description: "Cantidad de oraciones que tendrá el párrafo",
    params: [],
    required: false,
    types: [COMMON_TYPES.NUMBER],
  },
]
