import { Copy, Delete, Edit, Share } from "@modules/app/modules/icon/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Fragment } from "react"
import { Item } from "./components"

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

  return (
    <Fragment>
      <Item
        onClick={handleEditDataset}
        text={EDIT_OPTION}
        icon={Edit}
        id={`${name}-dataset-edit-button`}
      />

      <Item
        onClick={handleExportDataset}
        icon={Share}
        id={`${name}-dataset-export-button`}
        text={EXPORT_OPTION}
      />

      <Item
        onClick={handleCloneDataset}
        icon={Copy}
        id={`${name}-dataset-clone-button`}
        text={CLONE_OPTION}
      />

      <Item
        text={DELETE_OPTION}
        onClick={handleDeleteDataset}
        icon={Delete}
        id={`${name}-dataset-delete-button`}
      />
    </Fragment>
  )
}
