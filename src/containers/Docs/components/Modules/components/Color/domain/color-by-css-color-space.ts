import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { FORMAT } from "../shared/domain/format"

export const COLOR_BY_CSS_COLOR_SPACE_PARAMS: Param[] = [
  FORMAT("css"),
  {
    name: "space",
    description: { es: "CSS Space para generar el color", en: "Color CSS Space" },
    params: [],
    required: false,
    default: "'sRGB'",
    types: ["'sRGB'", "'display-p3'", "'rec2020'", "'a98-rgb'", "'prophoto-rgb'", "'rec2020'"],
  },
]

export const COLOR_BY_CSS_COLOR_SPACE_CODE = `
modules.color.colorByCSSColorSpace({ format: 'css', space: 'display-p3' }) // color(display-p3 0.12 1 0.23)
modules.color.colorByCSSColorSpace({ format: 'binary' }) // (8-32 bits x 3)
`
