import { MethodSection } from "../../shared/components"
import {
  COLOR_BY_CSS_COLOR_SPACE_CODE,
  COLOR_BY_CSS_COLOR_SPACE_PARAMS,
} from "./domain/color-by-css-color-space"
import { CMYK_PARAMS, CYMK_CODE } from "./domain/cmyk"
import { CSS_SUPPORTED_FUNCTION_CODE } from "./domain/css-supported-function"
import { CSS_SUPPORTED_SPACE_CODE } from "./domain/css-supported-space"
import { HSL_CODE, HSL_PARAMS } from "./domain/hsl"
import { HWB_CODE, HWB_PARAMS } from "./domain/hwb"
import { LCH_CODE, LCH_PARAMS } from "./domain/lch"
import { RGB_CODE, RGB_PARAMS } from "./domain/rgb"
import {
  CMYK,
  COLOR_BY_CSS_COLOR_SPACE,
  CSS_SUPPORTED_FUNCTION,
  CSS_SUPPORTED_SPACE,
  HSL,
  HWB,
  LCH,
  RGB,
} from "@modules/docs/domain/core/sections/modules/color"
import { SectionProvider } from "../../shared/context"
import { COLOR } from "@modules/docs/domain/core/sections/modules"

export default function Color() {
  return (
    <SectionProvider section={COLOR} result="json">
      <MethodSection
        code={CSS_SUPPORTED_FUNCTION_CODE}
        title={CSS_SUPPORTED_FUNCTION}
        params={[]}
      />

      <MethodSection title={CSS_SUPPORTED_SPACE} params={[]} code={CSS_SUPPORTED_SPACE_CODE} />

      <MethodSection code={RGB_CODE} params={RGB_PARAMS} title={RGB} />

      <MethodSection code={CYMK_CODE} params={CMYK_PARAMS} title={CMYK} />

      <MethodSection title={HSL} code={HSL_CODE} params={HSL_PARAMS} />

      <MethodSection code={HWB_CODE} params={HWB_PARAMS} title={HWB} />

      <MethodSection title={LCH} code={LCH_CODE} params={LCH_PARAMS} />

      <MethodSection
        code={COLOR_BY_CSS_COLOR_SPACE_CODE}
        params={COLOR_BY_CSS_COLOR_SPACE_PARAMS}
        title={COLOR_BY_CSS_COLOR_SPACE}
      />
    </SectionProvider>
  )
}
