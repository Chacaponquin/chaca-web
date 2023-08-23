import React from "react"
import { DEFAULT_ICON_SIZE } from "../constants/icons.enum"
import { IconProps } from "../interfaces/icon.interface"

const Menu = ({ size = DEFAULT_ICON_SIZE }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="#000000"
        d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"
      />
    </svg>
  )
}

export default Menu
