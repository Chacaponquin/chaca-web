import { useModal } from "@modules/modal/hooks"
import { Fragment } from "react"
import {
  AddField,
  DeleteAllDatasets,
  DeleteSchema,
  EditSchema,
  EditField,
  ExportDataset,
  ExportImage,
  ExportSchema,
} from "./components"
import {
  AddFieldModalProps,
  DeleteAllSchemasModalProps,
  DeleteSchemaModalProps,
  EditSchemaModalProps,
  EditFieldModalProps,
  ExportDatasetModalProps,
  ExportDatasetImageModalProps,
  ExportSchemaModalProps,
} from "@containers/Home/domain/modal"
import { ExportImageProps } from "@containers/Home/domain/props"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { Schema } from "@modules/dataset/domain/core/schema"

interface Props {
  handleExportImage(props: ExportImageProps): void
  handleExportDataset(dataset: Schema[], config: ExportFileConfigDTO): void
}

export default function Modals({ handleExportImage, handleExportDataset }: Props) {
  const { openModal } = useModal()

  return (
    <Fragment>
      {openModal instanceof DeleteAllSchemasModalProps && <DeleteAllDatasets />}
      {openModal instanceof AddFieldModalProps && (
        <AddField schemaId={openModal.schemaId} parentfieldId={openModal.parentfieldId} />
      )}
      {openModal instanceof DeleteSchemaModalProps && (
        <DeleteSchema id={openModal.id} name={openModal.name} />
      )}
      {openModal instanceof EditFieldModalProps && (
        <EditField
          field={openModal.field}
          schemaId={openModal.schemaId}
          parentfieldId={openModal.parentfieldId}
        />
      )}
      {openModal instanceof EditSchemaModalProps && <EditSchema schema={openModal.schema} />}
      {openModal instanceof ExportDatasetModalProps && (
        <ExportDataset handleExportDataset={handleExportDataset} />
      )}
      {openModal instanceof ExportDatasetImageModalProps && (
        <ExportImage handleExportImage={handleExportImage} />
      )}
      {openModal instanceof ExportSchemaModalProps && (
        <ExportSchema handleExportDataset={handleExportDataset} schema={openModal.schema} />
      )}
    </Fragment>
  )
}
