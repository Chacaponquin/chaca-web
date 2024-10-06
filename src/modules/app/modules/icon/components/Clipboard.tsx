import { IconProps } from "../interfaces"
import { DEFAULT_ICON_SIZE } from "../constants"

export default function Clipboard({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="17"
        y="4"
        width="14"
        height="6"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
