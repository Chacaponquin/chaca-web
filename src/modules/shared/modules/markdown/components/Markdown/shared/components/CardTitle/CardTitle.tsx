import { IconProps } from "@modules/app/modules/icon/interfaces"
import React from "react"

interface Props {
  text: string
  icon: React.FC<IconProps>
}

export default function CardTitle({ icon, text }: Props) {
  return (
    <header className="flex gap-x-2.5 mb-2 items-center">
      <i className="dark:stroke-white dark:fill-white stroke-black fill-black">
        {icon({ size: 20 })}{" "}
      </i>

      <span className="font-fontMedium text-base uppercase text-white">{text}</span>
    </header>
  )
}
