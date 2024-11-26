import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { CASE } from "../shared/domain/case"

export const CHARACTER_CODE = `
modules.datatype.character() // 'c'
modules.datatype.character({ case: 'upper' }) // "H"
`

export const CHARACTER_PARAMS: Param[] = [CASE]
