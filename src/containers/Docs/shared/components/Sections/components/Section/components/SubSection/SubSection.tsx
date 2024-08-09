import clsx from "clsx"
import { Link } from "react-router-dom"

interface Props {
  title: string
  active: boolean
  url: string
}

export default function SubSection({ title, url, active }: Props) {
  const BUTTON_CLASS = clsx("flex w-full", "py-1", "text-base", "font-fontMedium", {
    "dark:text-purple-6 text-purple-6": active,
    "dark:text-scale-10 text-scale-8": !active,
  })

  return (
    <Link to={url}>
      <li className="w-full">
        <button className={BUTTON_CLASS}>{title}</button>
      </li>
    </Link>
  )
}
