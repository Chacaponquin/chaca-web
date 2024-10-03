import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { FORMAT } from "../shared/domain/format"
import { INCLUDE_ALPHA } from "../shared/domain/include-alpha"

export const HSL_PARAMS: Param[] = [FORMAT("css"), INCLUDE_ALPHA("false")]

export const HSL_CODE = `
modules.color.hsl({ format: 'css' }) // hsl(0deg, 100%, 80%)
modules.color.hsl({ format: 'css', includeAlpha: true }) // hsl(0deg 100% 50% / 0.5)
modules.color.hsl({ format: 'binary' }) // (8-32 bits) x 3
modules.color.hsl({ format: 'binary', includeAlpha: true }) // (8-32 bits) x 4
`
