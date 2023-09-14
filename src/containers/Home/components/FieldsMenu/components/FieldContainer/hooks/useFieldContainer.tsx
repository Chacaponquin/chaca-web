import { useState } from "react"

export function useFieldContainer() {
  const [openMenu, setOpenMenu] = useState(false)
  const [subFieldsOpen, setSubFieldsOpen] = useState(true)

  const handleInteractSubFields = () => {
    setSubFieldsOpen(!subFieldsOpen)
  }

  const handleInteractOpenMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setOpenMenu(!openMenu)
  }

  return {
    openMenu,
    subFieldsOpen,
    handleInteractSubFields,
    handleInteractOpenMenu,
  }
}
