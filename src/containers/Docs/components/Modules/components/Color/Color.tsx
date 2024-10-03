import { MethodSection } from "../../shared/components"
import {
  COLOR_BY_CSS_COLOR_SPACE_CODE,
  COLOR_BY_CSS_COLOR_SPACE_PARAMS,
} from "./domain/color-by-css-color-space"
import { CMYK_PARAMS, CYMK_CODE } from "./domain/cmyk"
import { CSS_SUPPORTED_FUNCTION } from "./domain/css-supported-function"
import { CSS_SUPPORTED_SPACE } from "./domain/css-supported-space"
import { HSL_CODE, HSL_PARAMS } from "./domain/hsl"
import { HWB_CODE, HWB_PARAMS } from "./domain/hwb"
import { LCH_CODE, LCH_PARAMS } from "./domain/lch"
import { RGB_CODE, RGB_PARAMS } from "./domain/rgb"

export default function Color() {
  return (
    <>
      <MethodSection
        method="cssSupportedFunction"
        code={CSS_SUPPORTED_FUNCTION}
        apiId="css_supported_function"
        title="CSS Supported Function"
        params={[]}
      />

      <MethodSection
        method="cssSupportedSpace"
        apiId="css_supported_space"
        title="Css Supported Space"
        params={[]}
        code={CSS_SUPPORTED_SPACE}
      />

      <MethodSection method="rgb" apiId="rgb" code={RGB_CODE} params={RGB_PARAMS} title="RGB" />

      <MethodSection
        method="cmyk"
        apiId="cmyk"
        code={CYMK_CODE}
        params={CMYK_PARAMS}
        title="Cmyk"
      />

      <MethodSection method="hsl" title="Hsl" apiId="hsl" code={HSL_CODE} params={HSL_PARAMS} />

      <MethodSection method="hwb" apiId="hwb" code={HWB_CODE} params={HWB_PARAMS} title="Hwb" />

      <MethodSection method="lch" apiId="lch" code={LCH_CODE} params={LCH_PARAMS} title="Lch" />

      <MethodSection
        method="colorByCSSColorSpace"
        title="Color by CSS Space"
        code={COLOR_BY_CSS_COLOR_SPACE_CODE}
        params={COLOR_BY_CSS_COLOR_SPACE_PARAMS}
        apiId="color_by_css_color_space"
      />
    </>
  )
}
