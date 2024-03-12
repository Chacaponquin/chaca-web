import { DEFAULT_ICON_SIZE } from "../constants"
import { IconProps } from "../interfaces"

export default function Tip({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
