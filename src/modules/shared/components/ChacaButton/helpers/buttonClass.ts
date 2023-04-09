import clsx from "clsx"
import { ChacaButtonProps } from "../interfaces/chacaButton.intrface"

export const buttonClass = ({ size, className, color }: ChacaButtonProps) => {
  return clsx(
    "flex justify-center font-fontBold flex items-center transition-all duration-300 hover:brightness-150 w-max",
    className,
    {
      "py-[3px] px-3 text-sm rounded-sm": size === "small",
      "py-1 px-5 text-base rounded-sm": size === "medium",
      "py-1 px-6 text-lg rounded-sm": size === "large",
      "py-2 px-7 rounded-sm text-lg": size === "extra-large",
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
  )
}
