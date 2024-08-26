import { IconProps } from "@modules/app/modules/icon/interfaces"
import clsx from "clsx"

interface Props {
  icon: React.FC<IconProps>
  message: string
  onClick(): void
  active: boolean
}

export default function Item({ icon, onClick, active, message }: Props) {
  const CLASS = clsx("px-2.5 py-2", "rounded", {
    "hover:bg-scale-6": !active,
    "bg-scale-6": active,
  })

  return (
    <button className={CLASS} onClick={onClick} title={message}>
      <i className="stroke-white fill-white">{icon({ size: 16 })}</i>
    </button>
  )
}
