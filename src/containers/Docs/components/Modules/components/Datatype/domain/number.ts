import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"
import { PRECISION } from "../shared/domain/precision"

export const NUMBER_PARAMS: Param[] = [MIN, MAX, PRECISION]

export const NUMBER_CODE = `
modules.datatype.number() // 301
modules.datatype.number({ min: 10, max: 30 }) // 10.2327
`
