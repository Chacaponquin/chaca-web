import { Delete, Image, Plus, Share } from "@modules/app/modules/icon/components"
import { LanguageOption, MenuItem } from "../interfaces"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { createRef, useEffect, useState } from "react"
import { useClickOutside } from "@modules/shared/hooks"
import {
  AddDatasetCommand,
  CommandsExecutor,
  ExportAllDatasetsCommand,
  handleExportDatasetsImageCommand,
} from "@modules/datasets/domain/commands"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"

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
  const [open, setOpen] = useState(false)

  const listRef = createRef<HTMLDivElement>()

  const { handleChangeTheme: handleChangeThemeHook, theme } = useTheme()
  const { handleChangeLanguage: handleChangeLanguageHook, language } = useLanguage()

  useClickOutside({ element: listRef, onClickOutside: () => setOpen(false) })

  const { ADD_DATASET, DELETE_ALL, EXPORT_ALL, EXPORT_IMAGE } = useTranslation({
    ADD_DATASET: { en: "Add Dataset", es: "Añadir Dataset" },
    EXPORT_ALL: { en: "Export all", es: "Exportar todo" },
    EXPORT_IMAGE: { en: "Export image", es: "Exportar imagen" },
    DELETE_ALL: { en: "Delete all", es: "Eliminar todo" },
  })

  const commands = new CommandsExecutor([
    new AddDatasetCommand(handleAddDataset),
    new ExportAllDatasetsCommand(handleExportAllDatasets),
    new handleExportDatasetsImageCommand(handleExportImage),
  ])

  const handleKeyboardAction = (event: globalThis.KeyboardEvent) => {
    commands.execute(event)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardAction)

    return () => {
      document.removeEventListener("keydown", handleKeyboardAction)
    }
  }, [handleKeyboardAction])

  const items: MenuItem[] = [
    {
      icon: Plus,
      title: ADD_DATASET,
      onClick: handleAddDataset,
      command: AddDatasetCommand.value,
    },
    {
      icon: Share,
      title: EXPORT_ALL,
      onClick: handleExportAllDatasets,
      command: ExportAllDatasetsCommand.value,
    },
    {
      icon: Image,
      title: EXPORT_IMAGE,
      onClick: handleExportImage,
      command: handleExportDatasetsImageCommand.value,
    },
    { icon: Delete, title: DELETE_ALL, onClick: handleDeleteAll, command: "" },
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

  const languageOptions: LanguageOption[] = [
    { title: "Español", type: "es" },
    { title: "English", type: "en" },
  ]

  function handleChangeLanguage(name: string) {
    const found = languageOptions.find((l) => l.title === name)

    if (found) {
      handleChangeLanguageHook(found.type)
    }
  }

  const foundLanguage = languageOptions.find((l) => l.type === language)

  return {
    items,
    handleChangeTheme,
    foundLanguage,
    open,
    handleChangeOpen,
    listRef,
    handleChangeLanguage,
    languageOptions,
  }
}
