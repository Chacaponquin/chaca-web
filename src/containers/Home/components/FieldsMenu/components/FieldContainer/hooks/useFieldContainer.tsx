import { useState } from "react"
import clsx from "clsx"

export function useFieldContainer() {
  const [openMenu, setOpenMenu] = useState(false)
  const [subFieldsOpen, setSubFieldsOpen] = useState(true)

  const divClass = clsx(
    "w-full flex items-center cursor-pointer justify-between py-2 transition-all duration-300 px-2",
  )

  const handleInteractSubFields = () => {
    setSubFieldsOpen(!subFieldsOpen)
  }

  const handleInteractOpenMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setOpenMenu(!openMenu)
  }

  return {
    openMenu,
    divClass,
    subFieldsOpen,
    handleInteractSubFields,
    handleInteractOpenMenu,
  }
}
