import clsx from "clsx"
import { useState } from "react"
import { Header } from "./components"

interface Props {
  children: React.ReactNode
  header: string
  type: "danger" | "default" | "warning"
}

export default function TypeInfo({ children, header, type }: Props) {
  const [active, setActive] = useState(true)

  function handleClose() {
    setActive(false)
  }

  const CLASS = clsx(
    "w-full",
    "px-5 py-2.5",
    "mt-1.5",
    "rounded",
    "border-[1px]",

    {
      "flex flex-col": active,
      hidden: !active,
    },

    {
      "bg-carnation-500/20": type === "danger",
      "bg-scale-2": type === "default",
      "bg-yellow-500/20": type === "warning",
    },

    {
      "border-scale-6": type === "default",
      "border-carnation-400": type === "danger",
      "border-yellow-500": type === "warning",
    },
  )

  return (
    <div className={CLASS}>
      <Header type={type} handleClose={handleClose} header={header} />
      <div className="mt-1.5">{children}</div>
    </div>
  )
}
