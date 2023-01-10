import React from "react"
import { DEFAULT_ICON_SIZE } from "../constants/icons.enum"
import { IconProps } from "../interfaces/icon.interface"

const Plus = ({ size = DEFAULT_ICON_SIZE }: IconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size}>
      <path
        fill='inherit'
        d='M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z'
      />
    </svg>
  )
}

export default Plus
