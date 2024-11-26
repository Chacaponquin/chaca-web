import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { CASE } from "../shared/domain/case"
import { LENGTH } from "../shared/domain/length"

export const HEXADECIMAL_CODE = `
modules.datatype.hexadecimal() // '009df'
modules.datatype.hexadecimal({ length: 3 }) // '01D'
modules.datatype.hexadecimal({ lenght: 3, case: 'upper' }) // 'DE20'
`

export const HEXADECIMAL_PARAMS: Param[] = [LENGTH, CASE]
