import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"

export const INT_PARAMS: Param[] = [MIN, MAX]

export const INT_CODE = `
modules.datatype.int() // 462
modules.datatype.int() // 28
`
