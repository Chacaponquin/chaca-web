import { IconProps } from "../interfaces"
import { DEFAULT_ICON_SIZE } from "../constants"

export default function Lock({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="22"
        width="36"
        height="22"
        rx="2"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 30V36"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
