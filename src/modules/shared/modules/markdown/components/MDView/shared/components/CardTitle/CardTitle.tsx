import { IconProps } from "@modules/app/modules/icon/interfaces"
import React from "react"

interface Props {
  text: string
  icon: React.FC<IconProps>
}

export default function CardTitle({ icon, text }: Props) {
  return (
    <div className="flex gap-x-4 mb-2">
      <i className="dark:stroke-white dark:fill-white stroke-black fill-black">
        {icon({ size: 25 })}{" "}
      </i>

      <h1 className="font-fontMedium text-lg uppercase">{text}</h1>
    </div>
  )
}
