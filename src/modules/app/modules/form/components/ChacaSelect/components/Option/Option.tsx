import { Size } from "@form/interfaces"
import clsx from "clsx"

interface Props {
  onClick(): void
  text: string
  selected: boolean
  size: Size
}

export default function Option({ onClick, text, selected, size }: Props) {
  const className = clsx(
    "duration-300 transition-all",
    "cursor-pointer",
    "py-2",
    {
      "bg-gray-100 dark:bg-scale-3": selected,
      "dark:text-white": selected,
    },
    {
      "text-black dark:text-white": !selected,
      "hover:bg-gray-100 dark:hover:bg-scale-3": !selected,
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

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  )
}
