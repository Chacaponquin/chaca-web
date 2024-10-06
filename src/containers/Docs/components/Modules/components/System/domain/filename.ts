import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const FILENAME_CODE = `
modules.system.filename() // 'academy.png'
modules.system.filename({ ext: 'gif' }) // 'academy_button_school.gif'
`

export const FILENAME_PARAMS: Param[] = [
  {
    name: "ext",
    description: "Extensión del archivo",
    params: [],
    required: false,
    types: [COMMON_TYPES.STRING],
  },
]
