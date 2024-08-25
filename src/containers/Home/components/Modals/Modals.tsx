import { useModal } from "@modules/modal/hooks"
import { Fragment } from "react"
import {
  AddField,
  DeleteAllDatasets,
  DeleteDataset,
  EditDataset,
  EditField,
  ExportAllDatasets,
  ExportImage,
  ExportDataset,
} from "./components"
import {
  AddFieldModalProps,
  DeleteAllDatasetsModalProps,
  DeleteDatasetModalProps,
  EditDatasetModalProps,
  EditFieldModalProps,
  ExportAllDatasetsModalProps,
  ExportDatasetImageModalProps,
  ExportDatasetModalProps,
} from "@containers/Home/domain/modal"
import { ExportImageProps } from "@containers/Home/domain/props"
import { Dataset } from "@modules/datasets/domain/core"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportImage(props: ExportImageProps): void
  handleExportDatasets(datasets: Dataset[], config: ExportFileConfigDTO): void
}

export default function Modals({ handleExportImage, handleExportDatasets }: Props) {
  const { openModal } = useModal()

  return (
    <Fragment>
      {openModal instanceof DeleteAllDatasetsModalProps && <DeleteAllDatasets />}
      {openModal instanceof AddFieldModalProps && (
        <AddField datasetId={openModal.datasetId} parentfieldId={openModal.parentfieldId} />
      )}
      {openModal instanceof DeleteDatasetModalProps && (
        <DeleteDataset id={openModal.id} name={openModal.name} />
      )}
      {openModal instanceof EditFieldModalProps && (
        <EditField
          field={openModal.field}
          datasetId={openModal.datasetId}
          parentfieldId={openModal.parentfieldId}
        />
      )}
      {openModal instanceof EditDatasetModalProps && <EditDataset dataset={openModal.dataset} />}
      {openModal instanceof ExportAllDatasetsModalProps && (
        <ExportAllDatasets handleExportDatasets={handleExportDatasets} />
      )}
      {openModal instanceof ExportDatasetImageModalProps && (
        <ExportImage handleExportImage={handleExportImage} />
      )}
      {openModal instanceof ExportDatasetModalProps && (
        <ExportDataset handleExportDatasets={handleExportDatasets} dataset={openModal.dataset} />
      )}
    </Fragment>
  )
}
