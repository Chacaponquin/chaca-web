import clsx from "clsx"
import { useState } from "react"
import { Header } from "./components"

interface Props {
  children: React.ReactNode
  header: string
}

export default function TypeInfo({ children, header }: Props) {
  const [active, setActive] = useState(true)

  function handleClose() {
    setActive(false)
  }

  const CLASS = clsx("w-full", "bg-scale-2", "px-5 py-2.5", "mt-1.5", "rounded", {
    "flex flex-col": active,
    hidden: !active,
  })

  return (
    <div className={CLASS}>
      <Header handleClose={handleClose} header={header} />
      <div className="mt-1.5">{children}</div>
    </div>
  )
}
