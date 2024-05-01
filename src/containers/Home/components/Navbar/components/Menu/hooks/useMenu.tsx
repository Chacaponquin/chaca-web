import { Delete, Image, Plus, Share } from "@modules/app/modules/icon/components"
import { MenuItem } from "../interfaces"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { createRef, useState } from "react"
import { useClickOutside } from "@modules/shared/hooks"

interface Props {
  handleExportAllDatasets(): void
  handleExportImage(): void
  handleAddDataset(): void
  handleDeleteAll(): void
}

export default function useMenu({
  handleAddDataset,
  handleExportAllDatasets,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const listRef = createRef<HTMLDivElement>()

  const [open, setOpen] = useState(false)

  const { handleChangeTheme: handleChangeThemeHook, theme } = useTheme()

  const items: MenuItem[] = [
    { icon: Plus, title: "Añadir Dataset", onClick: handleAddDataset, command: "Ctrl+A" },
    { icon: Share, title: "Exportar todo", onClick: handleExportAllDatasets, command: "Ctrl+R" },
    { icon: Image, title: "Exportar imagen", onClick: handleExportImage, command: "Ctrl+I" },
    { icon: Delete, title: "Eliminar todo", onClick: handleDeleteAll, command: "Ctrl+D" },
  ]

  function handleChangeOpen() {
    setOpen((prev) => !prev)
  }

  function handleChangeTheme() {
    if (theme === THEME.LIGHT) {
      handleChangeThemeHook(THEME.DARK)
    } else {
      handleChangeThemeHook(THEME.LIGHT)
    }
  }

  useClickOutside({ element: listRef, onClickOutside: () => setOpen(false) })

  return { items, handleChangeTheme, open, handleChangeOpen, listRef }
}
