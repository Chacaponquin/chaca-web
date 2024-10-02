import { Delete, Image, Plus, Share } from "@modules/app/modules/icon/components"
import { LanguageOption, MenuItem } from "../domain"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { createRef, useMemo, useState } from "react"
import { useClickOutside } from "@modules/shared/hooks"
import {
  AddDatasetCommand,
  ExportAllDatasetsCommand,
  handleExportDatasetsImageCommand,
} from "@modules/dataset/domain/commands"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"
import { CommandsExecutor } from "@modules/app/domain/command"
import { useCommands } from "@modules/app/hooks"

interface Props {
  handleExportDataset(): void
  handleExportImage(): void
  handleAddSchema(): void
  handleDeleteAll(): void
}

export default function useMenu({
  handleAddSchema,
  handleExportDataset,
  handleExportImage,
  handleDeleteAll,
}: Props) {
  const [open, setOpen] = useState(false)

  const listRef = createRef<HTMLDivElement>()

  const { handleChangeTheme: handleChangeThemeHook, theme } = useTheme()
  const { handleChangeLanguage: handleChangeLanguageHook } = useLanguage()

  const commands = new CommandsExecutor([
    new AddDatasetCommand(handleAddSchema),
    new ExportAllDatasetsCommand(handleExportDataset),
    new handleExportDatasetsImageCommand(handleExportImage),
  ])

  useClickOutside({ element: listRef, onClickOutside: () => setOpen(false) })
  useCommands({ executor: commands })

  const { ADD_DATASET, DELETE_ALL, EXPORT_ALL, EXPORT_IMAGE } = useTranslation({
    ADD_DATASET: { en: "Add schema", es: "Añadir schema" },
    EXPORT_ALL: { en: "Export dataset", es: "Exportar dataset" },
    EXPORT_IMAGE: { en: "Export image", es: "Exportar imagen" },
    DELETE_ALL: { en: "Delete all", es: "Eliminar todo" },
  })

  const items: MenuItem[] = [
    {
      icon: Plus,
      title: ADD_DATASET,
      onClick: handleAddSchema,
      command: AddDatasetCommand.value,
    },
    {
      icon: Share,
      title: EXPORT_ALL,
      onClick: handleExportDataset,
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

  const languageOptions: LanguageOption[] = useMemo(() => {
    return [
      { title: "Español", type: "es" },
      { title: "English", type: "en" },
    ]
  }, [])

  function handleChangeLanguage(v: LanguageOption) {
    handleChangeLanguageHook(v.type)
  }

  return {
    items,
    handleChangeTheme,
    open,
    handleChangeOpen,
    listRef,
    handleChangeLanguage,
    languageOptions,
  }
}
