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
    "py-1.5 px-3",
    "cursor-pointer",
    "hover:bg-scale-12 dark:hover:bg-scale-5",
    "gap-x-5",
    "rounded-sm",
  )

  return (
    <li onClick={onClick} id={id} className={CLASS}>
      <div className="flex items-center gap-x-3">
        <i className="stroke-white fill-white">{icon({ size: 14 })}</i>
        <p className="text-xs whitespace-nowrap">{text}</p>
      </div>

      <span className="font-fontCodeMedium text-xs text-gray-500">{command}</span>
    </li>
  )
}
