import clsx from "clsx"
import { Link } from "react-router-dom"

interface Props {
  url: string
  text: string
  title: string
  direction: "left" | "right"
}

export default function Button({ url, text, title, direction }: Props) {
  const CLASS = clsx(
    "flex flex-col",
    "justify-center",
    "transition-all duration-200",
    "rounded",
    "border-[0.5px] border-scale-10",
    "w-full h-max",
    "px-6 py-2.5",
    "hover:border-purple-6",
    "text-base",

    { "text-right": direction === "right", "text-left": direction === "left" },
  )

  return (
    <Link to={url}>
      <button type="button" className={CLASS}>
        <span className="text-scale-10 mb-0.5">{text}</span>
        <p className="text-purple-6">{title}</p>
      </button>
    </Link>
  )
}
