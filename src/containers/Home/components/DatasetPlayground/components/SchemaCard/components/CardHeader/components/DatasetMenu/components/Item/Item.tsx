import { PopoverItem } from "@modules/app/modules/form/components/ChacaPopover/components"
import { IconProps } from "@modules/app/modules/icon/interfaces"
import React from "react"

interface Props {
  text: string
  id: string
  icon: React.FC<IconProps>
  onClick(): void
  command: string
}

export default function Item({ icon, id, onClick, text, command }: Props) {
  return (
    <PopoverItem
      onClick={onClick}
      selected={false}
      id={id}
      size="sm"
      text={text}
      icon={icon}
      extra={<span className="font-fontCodeMedium text-xs text-gray-500">{command}</span>}
    />
  )
}
