import { IconProps } from "@modules/app/modules/icon/interfaces/icon.interface"
import React from "react"

interface Props {
  text: string
  id: string
  icon: React.FC<IconProps>
  onClick: () => void
}

export default function Item({ icon, id, onClick, text }: Props) {
  return (
    <li
      onClick={onClick}
      id={id}
      className="flex items-center gap-x-5 text-base py-2 px-5 transition-all duration-300 hover:bg-grayColor cursor-pointer dark:hover:bg-darkColor"
    >
      {icon({ size: 16 })}
      <p>{text}</p>
    </li>
  )
}
