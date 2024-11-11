import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { MIN } from "../shared/domain/min"
import { MAX } from "../shared/domain/max"
import { PRECISION } from "../shared/domain/precision"

export const LONGITUDE_CODE = `
modules.address.longitude() // -30.9501
modules.address.longitude({ max: 10 }) // 5.7225
modules.address.longitude({ max: 10, min: -10 }) // -9.6273
modules.address.longitude({ max: 10, min: -10, precision: 5 }) // 2.68452
`

export const LONGITUDE_PARAMS: Param[] = [MIN(-180), MAX(180), PRECISION]
