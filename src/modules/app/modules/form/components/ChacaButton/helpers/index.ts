import clsx from "clsx"
import { ChacaButtonProps } from "../interfaces"

export const buttonClass = ({ size, color, full = false, rounded = false }: ChacaButtonProps) => {
  return clsx(
    "flex justify-center items-center",
    "transition-all duration-300 hover:opacity-70",

    {
      "py-[3px] px-3 text-sm": size === "sm",
      "py-1 px-5 text-base": size === "base",
      "py-1.5 px-5 text-lg": size === "lg",
      "py-2.5 px-8 text-xl": size === "xl",
    },

    { "gap-1": size === "sm", "gap-1.5": size === "base", "gap-2": size === "lg" },

    {
      "bg-purple-6": color === "primary",
      "bg-gradient-to-tr from-purple-6 to-purple-7": color === "gradient",
      "bg-red-2": color === "danger",
      "bg-purple-7": color === "secondary",
      "bg-white dark:bg-scale-5": color === "cancel",
    },

    { "dark:border-[1px] dark:border-scale-7 border-[2px] border-scale-11": color === "cancel" },

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
}
