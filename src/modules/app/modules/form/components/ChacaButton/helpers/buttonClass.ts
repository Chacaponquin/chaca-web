import clsx from "clsx"
import { ChacaButtonProps } from "../interfaces"

export const buttonClass = ({
  size,
  className = "",
  color,
  full = false,
  rounded = false,
}: ChacaButtonProps) => {
  return clsx(
    "flex justify-center font-fontMedium flex items-center transition-all duration-300 hover:brightness-150",
    {
      "py-[3px] px-3 text-sm": size === "small",
      "py-1 px-5 text-base": size === "medium",
      "py-1 px-5 text-lg": size === "large",
      "py-2.5 px-8 text-2xl": size === "extra-large",
    },
    {
      "bg-principalColor text-white": color === "primary",
      "bg-gradient-to-tr from-principalColor to-secondColor text-white": color === "gradient",
      "bg-dangerColor text-white": color === "danger",
      "bg-secondColor text-white": color === "secondary",
      "bg-slate-200 text-black": color === "cancel",
    },
    {
      "text-white fill-white":
        color === "primary" || color === "secondary" || color === "gradient" || color === "danger",
      "text-black fill-black": color === "cancel",
    },
    { "w-max": !full, "w-full": full },
    { "rounded-full": rounded, "rounded-sm": !rounded },
    className,
  )
}
