import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { FORMAT } from "../shared/domain/format"

export const CMYK_PARAMS: Param[] = [FORMAT("css")]

export const CYMK_CODE = `
modules.color.cmyk() // cmyk(100%, 0%, 0%, 0%)
modules.color.cmyk({ format: 'css' }) // cmyk(100%, 0%, 0%, 0%)
modules.color.cmyk({ format: 'binary' }) // (8-32 bits) x 4
`
