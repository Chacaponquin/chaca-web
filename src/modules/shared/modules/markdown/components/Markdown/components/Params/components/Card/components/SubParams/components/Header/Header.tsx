import { X, Plus } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { useState } from "react"

interface Props {
  handleChange(): void
  open: boolean
  name: string
}

export default function Header({ handleChange: ihandleChange, open, name }: Props) {
  const [hover, setHover] = useState(false)

  function handleChange(e: React.MouseEvent) {
    e.stopPropagation()
    ihandleChange()
  }

  const text = open ? `Cerrar las opciones de ${name}` : `Abrir las opciones de ${name}`

  const CLASS = clsx(
    "py-1.5 px-3.5",
    "flex items-center",
    "cursor-pointer",
    "gap-x-3",
    "transition-all duration-200",
    {
      "fill-white stroke-white text-white": hover,
      "fill-white/70 stroke-white/70 text-white/70": !hover,
    },
  )

  return (
    <header
      className={CLASS}
      onClick={handleChange}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button type="button">{open ? <X size={14} /> : <Plus size={15} />}</button>

      <p className="text-sm">{text}</p>
    </header>
  )
}
