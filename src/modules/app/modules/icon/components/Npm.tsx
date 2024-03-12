import { DEFAULT_ICON_SIZE } from "../constants"
import { IconProps } from "../interfaces"

export default function Npm({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="npm" height={size}>
      <path d="M4 13.78h32v10.66H20v1.78h-7.11v-1.78H4Zm1.78 8.89h3.55v-5.34h1.78v5.34h1.78v-7.11H5.78Zm8.89-7.11v8.88h3.55v-1.77h3.56v-7.11Zm3.55 1.77H20v3.56h-1.78Zm5.34-1.77v7.11h3.55v-5.34h1.78v5.34h1.78v-5.34h1.77v5.34h1.78v-7.11Z"></path>
    </svg>
  )
}
