import { Size } from "@form/domain"
import clsx from "clsx"

interface Props {
  onClick(): void
  text: string
  selected: boolean
  size: Size
  icon?: React.ReactNode
  extra?: React.ReactNode
  id?: string
}

export default function PopoverItem({ onClick, text, selected, size, icon, extra, id }: Props) {
  const CLASS = clsx(
    "duration-200 transition-all",
    "cursor-pointer",
    "rounded",

    {
      "bg-gray-100 dark:bg-scale-3": selected,
      "dark:text-white": selected,
    },

    {
      "text-black dark:text-white": !selected,
      "hover:bg-gray-100 dark:hover:bg-scale-6": !selected,
    },

    {
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
    },

    {
      "px-3 py-1.5": size === "sm",
      "px-4 py-1.5": size === "base",
      "px-5 py-2": size === "lg",
    },
  )

  return (
    <li className={CLASS} onClick={onClick} id={id}>
      <div className="flex items-center gap-x-3">
        {icon && <i className="stroke-white fill-white">{icon}</i>}

        <p className="whitespace-nowrap">{text}</p>
      </div>

      {extra}
    </li>
  )
}
