import { Link } from "react-router-dom"
import clsx from "clsx"

interface Props {
  route: string
  type: "cancel" | "link"
  text: string
}

export default function Button({ route, type, text }: Props) {
  const buttonClass = clsx(
    "rounded-full flex items-center esm:hidden w-max",
    "px-12 py-3",
    "hover:opacity-70 transition-all duration-300",
    "border-[3px] dark:border-[2px]",
    {
      "bg-white": type === "cancel",
      "dark:border-scale-11 border-scale-10": type === "cancel",
      "dark:bg-scale-5": type === "cancel",
      "dark:text-white text-black": type === "cancel",
    },
    { "bg-purple-6 text-white border-purple-6": type === "link" },
  )

  return (
    <Link className={buttonClass} to={route}>
      <p className="uppercase text-primary_color text-xl mb-0 text-center esm:text-base">{text}</p>
    </Link>
  )
}
