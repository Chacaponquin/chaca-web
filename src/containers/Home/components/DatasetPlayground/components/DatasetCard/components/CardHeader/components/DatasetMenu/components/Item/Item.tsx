import { IconProps } from "@modules/app/modules/icon/interfaces"
import clsx from "clsx"
import React from "react"

interface Props {
  text: string
  id: string
  icon: React.FC<IconProps>
  onClick(): void
  command: string
}

export default function Item({ icon, id, onClick, text, command }: Props) {
  const CLASS = clsx(
    "transition-all duration-300",
    "flex items-center justify-between",
    "py-2 pl-5 pr-5",
    "cursor-pointer",
    "hover:bg-scale-12 dark:hover:bg-scale-5",
    "gap-x-5",
  )

  return (
    <li onClick={onClick} id={id} className={CLASS}>
      <div className="flex items-center gap-x-5">
        {icon({ size: 16 })}
        <p className="text-base whitespace-nowrap">{text}</p>
      </div>

      <span className="font-fontCodeMedium text-sm text-gray-500">{command}</span>
    </li>
  )
}
