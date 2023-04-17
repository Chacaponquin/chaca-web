import { AppContext } from "@modules/shared/modules/app/context"
import { useEffect, useMemo, useContext } from "react"
import { v4 as uuid } from "uuid"

interface MenuProps {
  handleOpen?: () => void
  handleClose?: () => void
  ref: React.RefObject<HTMLDivElement | null>
}

export function useMenu({ handleClose, handleOpen, ref }: MenuProps) {
  const { handleCloseDropDown, handleOpenDropDown, openDropdown } = useContext(AppContext)

  const menuID = useMemo(uuid, [])

  function isDescendantOf(parent: HTMLElement, child: HTMLElement | null): boolean {
    if (!parent) {
      return true
    }

    if (!child) {
      return false
    }
    return child.parentNode === parent || isDescendantOf(parent, child.parentNode as HTMLElement)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement
      const current = ref.current as HTMLElement

      console.log(menuID)

      console.log(isDescendantOf(current, target), current, target)
      if (current && !isDescendantOf(current, target)) {
        handleCloseMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  function handleOpenMenu() {
    console.log("Abriendo")
    handleOpenDropDown(menuID)
    if (handleOpen) handleOpen()
  }

  function handleCloseMenu() {
    console.log("Cerrando")
    handleCloseDropDown(menuID)
    if (handleClose) handleClose()
  }

  return { handleCloseMenu, handleOpenMenu, isOpen: menuID === openDropdown }
}
