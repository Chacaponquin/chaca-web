import { Copy, Delete, Edit, Share } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Fragment } from "react"
import { Item } from "./components"
import { MenuItem } from "./interfaces"
import {
  CloneDatasetCommand,
  DeleteDatasetCommand,
  EditDatasetCommand,
  ExportDatasetCommand,
} from "@modules/datasets/domain/commands"

interface Props {
  handleEditDataset(): void
  handleDeleteDataset(): void
  handleExportDataset(): void
  handleCloneDataset(): void
  name: string
}

export default function DatasetMenu({
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
  handleCloneDataset,
  name,
}: Props) {
  const { DELETE_OPTION, EDIT_OPTION, EXPORT_OPTION, CLONE_OPTION } = useTranslation({
    DELETE_OPTION: { en: "Delete", es: "Borrar" },
    EXPORT_OPTION: { en: "Export", es: "Exportar" },
    EDIT_OPTION: { en: "Edit", es: "Editar" },
    CLONE_OPTION: { en: "Clone", es: "Clonar" },
  })

  const items: MenuItem[] = [
    {
      id: `${name}-dataset-edit-button`,
      icon: Edit,
      command: EditDatasetCommand.value,
      onClick: handleEditDataset,
      text: EDIT_OPTION,
    },
    {
      id: `${name}-dataset-export-button`,
      command: ExportDatasetCommand.value,
      icon: Share,
      onClick: handleExportDataset,
      text: EXPORT_OPTION,
    },
    {
      icon: Copy,
      command: CloneDatasetCommand.value,
      id: `${name}-dataset-clone-button`,
      onClick: handleCloneDataset,
      text: CLONE_OPTION,
    },
    {
      id: `${name}-dataset-delete-button`,
      icon: Delete,
      command: DeleteDatasetCommand.value,
      onClick: handleDeleteDataset,
      text: DELETE_OPTION,
    },
  ]

  return (
    <Fragment>
      {items.map(({ command, icon, id, onClick, text }, index) => (
        <Item onClick={onClick} text={text} key={index} icon={icon} id={id} command={command} />
      ))}
    </Fragment>
  )
}
