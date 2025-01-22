import { Size } from "@form/domain"
import { IconProps } from "@modules/app/modules/icon/interfaces"
import clsx from "clsx"

interface Props {
  text: string
  selected: boolean
  size: Size
  icon?: React.FC<IconProps>
  extra?: React.ReactNode
  id?: string
  onClick?: () => void
}

export default function PopoverItem({ onClick, text, selected, size, icon, extra, id }: Props) {
  const CLASS = clsx(
    "duration-200 transition-all",
    "cursor-pointer",
    "rounded",
    "w-full",
    "flex items-center justify-between",
    "gap-x-7",

    {
      "bg-gray-100 dark:bg-scale-3": selected,
      "dark:text-white": selected,
    },

    {
      "text-black dark:text-white": !selected,
      "hover:bg-gray-100 dark:hover:bg-scale-6": !selected,
    },

    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
    },

    {
      "px-3 py-1.5": size === "sm" || size == "xs",
      "px-4 py-1.5": size === "base",
      "px-5 py-2": size === "lg",
    },
  )

  return (
    <li className={CLASS} onClick={onClick} id={id}>
      <div className="flex items-center gap-x-3">
        {icon && <i className="stroke-white fill-white">{icon({ size: 18 })}</i>}

        <p className="whitespace-nowrap">{text}</p>
      </div>

      {extra}
    </li>
  )
}
