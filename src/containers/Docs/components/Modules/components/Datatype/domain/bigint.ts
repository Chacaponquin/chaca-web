import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"

export const BIGINT_CODE = `
modules.datatype.bigInt() // 55422n
modules.datatype.bigInt({ min: 1000000n }) // 431433n
modules.datatype.bigInt({ max: 100n }) // 42n
modules.datatype.bigInt({ min: 10n, max: 100n }) // 36n
`

export const BIGINT_PARAMS: Param[] = [MIN, MAX]
