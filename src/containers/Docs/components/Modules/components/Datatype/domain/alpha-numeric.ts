import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { LENGTH } from "../shared/domain/length"
import { CASE } from "../shared/domain/case"
import { BANNED } from "../shared/domain/banned"
import { PREFIX } from "../shared/domain/prefix"

export const ALPHA_NUMERIC_CODE = `
modules.datatype.alphaNumeric() // "F43jUs"
modules.datatype.alphaNumeric({ length: 5 }) // "n3jO4"
modules.datatype.alphaNumeric({ length: 7, case = "lower" }) // "ow3kn42"
`

export const ALPHA_NUMERIC_PARAMS: Param[] = [LENGTH, CASE, BANNED, PREFIX]
