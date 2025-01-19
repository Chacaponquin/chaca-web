import { Size } from "@modules/app/modules/form/domain"
import clsx from "clsx"

interface Props {
  label: string
  selected: boolean
  size: Size
}

export default function MenuOption({ label, selected, size }: Props) {
  const CLASS = clsx(
    "w-full transition-all duration-200",
    "cursor-pointer",
    "rounded-md",
    "dark:text-white text-black",

    {
      "dark:bg-scale-4": selected,
      "dark:hover:bg-scale-4": !selected,
    },

    {
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
    },

    {
      "px-3 py-1": size === "sm",
      "px-4 py-1.5": size === "base",
      "px-5 py-1.5": size === "lg",
    },
  )

  return <div className={CLASS}>{label}</div>
}
