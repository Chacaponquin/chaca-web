import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { LENGTH } from "../shared/domain/length"
import { CASE } from "../shared/domain/case"

export const CHARACTERS_CODE = `
modules.datatype.characters() // 'v'
modules.datatype.characters({ length: 5 }) // 'bhtlw'
modules.datatype.characters({ length: 5, case: 'upper' }) // 'HQRSD'
`

export const CHARACTERS_PARAMS: Param[] = [LENGTH, CASE]
