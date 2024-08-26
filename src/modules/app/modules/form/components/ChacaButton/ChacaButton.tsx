import { Size } from "@form/domain"
import clsx from "clsx"

interface Props {
  text: string
  size: Size
  color: "primary" | "gradient" | "danger" | "secondary" | "cancel"
  disabled?: boolean
  full?: boolean
  type?: "submit" | "button"
  id?: string
  onClick?: () => void
  icon?: React.ReactNode
  rounded?: boolean
}

export default function ChacaButton({
  color,
  size,
  text,
  disabled,
  full,
  icon,
  id,
  onClick,
  rounded,
  type,
}: Props) {
  const CLASS = clsx(
    "flex justify-center items-center",
    "transition-all duration-300 hover:opacity-70",

    {
      "py-[3px] px-3 text-sm": size === "sm",
      "py-1 px-4 text-base": size === "base",
      "py-1.5 px-5 text-lg": size === "lg",
      "py-2.5 px-8 text-xl": size === "xl",
    },

    { "gap-2.5": size === "sm", "gap-3.5": size === "base", "gap-4": size === "lg" },

    {
      "bg-purple-6": color === "primary",
      "bg-gradient-to-tr from-purple-6 to-purple-7": color === "gradient",
      "bg-red-2": color === "danger",
      "bg-purple-7": color === "secondary",
      "bg-white dark:bg-scale-5": color === "cancel",
    },

    {
      "dark:border-[1px] dark:border-scale-7 border-[2px] border-gray-300": color === "cancel",
      "border-[1px] border-purple-5": color === "primary",
    },

    {
      "text-white":
        color === "primary" || color === "secondary" || color === "gradient" || color === "danger",
      "text-black dark:text-white": color === "cancel",
    },

    {
      "fill-white":
        color === "primary" ||
        color === "secondary" ||
        color === "gradient" ||
        color === "danger" ||
        color === "cancel",
      "fill-black": color === "cancel",
    },

    { "w-max": !full, "w-full": full },

    { "rounded-full": rounded, "rounded-sm": !rounded },
  )

  return (
    <button
      onClick={onClick}
      className={CLASS}
      id={id}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {icon}
      <p className="">{text}</p>
    </button>
  )
}
