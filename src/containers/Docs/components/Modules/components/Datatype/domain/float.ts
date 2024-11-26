import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"
import { PRECISION } from "../shared/domain/precision"

export const FLOAT_PARAMS: Param[] = [MIN, MAX, PRECISION]

export const FLOAT_CODE = `
modules.datatype.float() // 462.12
modules.datatype.float({ min: 10, max: 30 }) // 10.23
modules.datatype.float({ precision: 4 }) // 90.5362
`
