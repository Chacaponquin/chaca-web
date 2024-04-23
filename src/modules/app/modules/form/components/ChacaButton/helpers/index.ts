import clsx from "clsx"
import { ChacaButtonProps } from "../interfaces"

export const buttonClass = ({ size, color, full = false, rounded = false }: ChacaButtonProps) => {
  return clsx(
    "flex justify-center items-center",
    "transition-all duration-300 hover:opacity-70",

    {
      "py-[3px] px-3 text-sm": size === "sm",
      "py-1 px-5 text-base": size === "base",
      "py-1 px-5 text-lg": size === "lg",
      "py-2.5 px-8 text-xl": size === "xl",
    },

    {
      "bg-purple-6 text-white": color === "primary",
      "bg-gradient-to-tr from-purple-6 to-purple-7 text-white": color === "gradient",
      "bg-red-2 text-white": color === "danger",
      "bg-purple-7 text-white": color === "secondary",
      "bg-scale-12 text-black dark:bg-scale-5 text-black": color === "cancel",
    },

    { "dark:border-[1px] dark:border-scale-7 dark:text-white": color === "cancel" },

    {
      "text-white fill-white":
        color === "primary" || color === "secondary" || color === "gradient" || color === "danger",
      "text-black fill-black": color === "cancel",
    },

    { "w-max": !full, "w-full": full },

    { "rounded-full": rounded, "rounded-sm": !rounded },
  )
}
