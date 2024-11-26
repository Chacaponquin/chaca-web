import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { FORMAT } from "../shared/domain/format"

export const HWB_PARAMS: Param[] = [FORMAT("css")]

export const HWB_CODE = `
modules.color.hwb({ format: 'css' }) // hwb(194 0% 0%)
modules.color.hwb({ format: 'binary' }) // (8-32 bits x 3)
`
