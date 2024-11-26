import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { LENGTH } from "../shared/domain/length"

export const BINARY_CODE_CODE = `
modules.datatype.binaryCode() // '00101'
modules.datatype.binaryCode({ length: 6 }) // '010100'
`

export const BINARY_CODE_PARAMS: Param[] = [LENGTH]
