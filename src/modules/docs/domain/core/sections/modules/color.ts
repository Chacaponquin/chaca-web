import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const CSS_SUPPORTED_FUNCTION: SectionTitle = {
  id: "css_supported_function",
  title: "cssSupportedFunction",
}

export const CSS_SUPPORTED_SPACE: SectionTitle = {
  id: "css_supported_space",
  title: "cssSupportedSpace",
}

export const RGB: SectionTitle = { id: "rgb", title: "rgb" }

export const CMYK: SectionTitle = { id: "cmyk", title: "cymk" }

export const HSL: SectionTitle = { id: "hsl", title: "hsl" }

export const HWB: SectionTitle = { id: "hwb", title: "hwb" }

export const LCH: SectionTitle = { id: "lch", title: "lch" }

export const COLOR_BY_CSS_COLOR_SPACE: SectionTitle = {
  id: "color_by_css_color_space",
  title: "colorByCssColorSpace",
}

export class Color extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Color", url: "color", apiId: "color" })

    this.titles = [
      RGB,
      CMYK,
      HSL,
      LCH,
      HWB,
      COLOR_BY_CSS_COLOR_SPACE,
      CSS_SUPPORTED_FUNCTION,
      CSS_SUPPORTED_SPACE,
    ]
  }
}
