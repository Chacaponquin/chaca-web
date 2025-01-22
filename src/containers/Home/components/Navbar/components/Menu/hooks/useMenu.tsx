import { Delete, Image, Plus, Share } from "@modules/app/modules/icon/components"
import { MenuItem } from "../domain"
import { useState } from "react"
import {
  AddDatasetCommand,
  ExportAllDatasetsCommand,
  handleExportDatasetsImageCommand,
} from "@modules/dataset/domain/commands"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { CommandsExecutor } from "@modules/app/domain/command"
import { useModal } from "@modules/modal/hooks"
import useCommands from "@modules/app/hooks/useCommands"

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
  const { openModal } = useModal()

  const [open, setOpen] = useState(false)

  const commands = new CommandsExecutor([
    new AddDatasetCommand(handleAddSchema),
    new ExportAllDatasetsCommand(handleExportDataset),
    new handleExportDatasetsImageCommand(handleExportImage),
  ])

  useCommands({ executor: commands, condition: openModal === null })

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

  return {
    items,
    open,
    setOpen,
  }
}
