import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const CSS_SUPPORTED_FUNCTION: ModuleSubSectionTitle = {
  id: "css_supported_function",
  title: "cssSupportedFunction",
}

export const CSS_SUPPORTED_SPACE: ModuleSubSectionTitle = {
  id: "css_supported_space",
  title: "cssSupportedSpace",
}

export const RGB: ModuleSubSectionTitle = { id: "rgb", title: "rgb" }

export const CMYK: ModuleSubSectionTitle = { id: "cmyk", title: "cymk" }

export const HSL: ModuleSubSectionTitle = { id: "hsl", title: "hsl" }

export const HWB: ModuleSubSectionTitle = { id: "hwb", title: "hwb" }

export const LCH: ModuleSubSectionTitle = { id: "lch", title: "lch" }

export const COLOR_BY_CSS_COLOR_SPACE: ModuleSubSectionTitle = {
  id: "color_by_css_color_space",
  title: "colorByCssColorSpace",
}

export const HUMAN: ModuleSubSectionTitle = { id: "human", title: "human" }

export class Color extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Color", es: "Color" },
      url: "color",
      apiId: "color",
      titles: [
        RGB,
        CMYK,
        HSL,
        LCH,
        HWB,
        COLOR_BY_CSS_COLOR_SPACE,
        CSS_SUPPORTED_FUNCTION,
        CSS_SUPPORTED_SPACE,
        HUMAN,
      ],
    })
  }
}
