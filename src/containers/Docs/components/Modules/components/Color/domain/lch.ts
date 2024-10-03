import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { FORMAT } from "../shared/domain/format"

export const LCH_PARAMS: Param[] = [FORMAT("css")]

export const LCH_CODE = `
modules.color.lch({ format: 'css' }) // lch(52.2345% 72.2 56.2)
modules.color.lch({ format: 'binary' }) // (8-32 bits x 3)
`
