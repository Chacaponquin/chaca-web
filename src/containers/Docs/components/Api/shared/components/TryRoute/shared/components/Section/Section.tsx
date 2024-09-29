import { ArrowDown, ArrowRight } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { useState } from "react"

interface Props {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: Props) {
  const [open, setOpen] = useState(true)

  function handleClick() {
    setOpen((o) => !o)
  }

  const ICON_SIZE = 14

  const CLASS = clsx(
    "flex items-center",
    "rounded",
    "py-2 px-3",
    "cursor-pointer",
    "gap-x-2.5",
    "bg-scale-10/10",
  )

  return (
    <section className="flex flex-col w-full px-4">
      <div className={CLASS} onClick={handleClick}>
        <i className="fill-white stroke-white">
          {open ? <ArrowDown size={ICON_SIZE} /> : <ArrowRight size={ICON_SIZE} />}
        </i>

        <p className="text-white text-sm font-fontCode">{title}</p>
      </div>

      {open && children}
    </section>
  )
}
