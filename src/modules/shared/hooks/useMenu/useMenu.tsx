/* eslint-disable @typescript-eslint/no-empty-function */

import { AppConfigContext } from "@modules/shared/context"
import { useContext, useMemo } from "react"
import { v4 as uuid } from "uuid"

interface MenuProps {
  handleOpen?: () => void
  handleClose?: () => void
}

export function useMenu({ handleClose, handleOpen }: MenuProps = {}) {
  const { handleOpenDropDown, handleCloseDropDown, openDropdown } = useContext(AppConfigContext)

  const menuID = useMemo(() => uuid(), [])

  function handleOpenMenu() {
    handleOpenDropDown(menuID)
    if (handleOpen) handleOpen()

    document.onclick = (e) => {
      const target = e.target as HTMLElement

      if (!target.id || !(target.id === openDropdown)) {
        handleCloseDropDown()
      }
    }
  }

  function handleCloseMenu() {
    handleCloseDropDown()
    if (handleClose) handleClose()

    document.onclick = () => {}
  }

  return { menuID, handleCloseMenu, handleOpenMenu }
}
