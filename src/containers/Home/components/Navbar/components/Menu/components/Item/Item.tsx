import { IconProps } from "@modules/app/modules/icon/interfaces"
import clsx from "clsx"

interface Props {
  icon: React.FC<IconProps>
  title: string
  onClick(): void
}

export default function Item({ icon, onClick, title }: Props) {
  const CLASS = clsx(
    "flex items-center",
    "gap-x-5",
    "px-5 py-3",
    "dark:bg-scale-3 bg-white",
    "text-base",
    "cursor-pointer",
    "dark:hover:bg-scale-5 hover:bg-scale-12",
  )

  return (
    <div className={CLASS} onClick={onClick}>
      <i className="dark:stroke-white dark:fill-white stroke-black fill-black">
        {icon({ size: 24 })}
      </i>

      <p className="text-base">{title}</p>
    </div>
  )
}
