import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const ZIP_CODE = `
modules.address.zipCode() // '62581'
modules.address.zipCode({ format: '###' }) // '453'
`

export const ZIP_PARAMS: Param[] = [
  {
    name: "format",
    description: "Formato del código",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
]
