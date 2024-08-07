import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useDatasetServices } from "@modules/datasets/services"
import { usePlayground } from "@modules/playground/hooks"
import { useSchemas } from "@modules/schemas/hooks"
import { useConfig } from "@modules/config/hooks"
import { ExportImageProps } from "../domain/props"
import {
  AddFieldModalProps,
  DeleteAllDatasetsModalProps,
  ExportAllDatasetsModalProps,
  ExportDatasetImageModalProps,
  ExportDatasetModalProps,
} from "../domain/modal"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/dataset"
import { ExportDatasetDTO } from "@modules/datasets/dto/dataset"
import { DatasetError } from "@modules/datasets/errors/dataset"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useContext } from "react"
import { HomeContext } from "../context"

export default function useHome() {
  const { handleChangeLoading } = useContext(HomeContext)
  const { datasets, selectedDataset, showFieldsMenu, searchRefField } = useDatasets()
  const { handleOpenModal } = useModal()
  const { handleGenerateImage } = usePlayground()
  const { downloadDatasetsImage, exportDatasets } = useDatasetServices()
  const { loading: schemasLoading, findParent, findType } = useSchemas()
  const { loading: configLoading } = useConfig()
  const { toastChacaError } = useToast()

  const loading = schemasLoading || configLoading

  function handleOpenExportAllDatasets() {
    handleOpenModal(new ExportAllDatasetsModalProps())
  }

  function handleOpenExportSelectedDataset() {
    if (selectedDataset) {
      handleOpenModal(new ExportDatasetModalProps(selectedDataset))
    }
  }

  function handleAddNewField() {
    if (selectedDataset) {
      handleOpenModal(new AddFieldModalProps(selectedDataset.id, selectedDataset.id))
    }
  }

  function handleOpenExportImage() {
    handleOpenModal(new ExportDatasetImageModalProps())
  }

  function handleOpenDeleteAll() {
    handleOpenModal(new DeleteAllDatasetsModalProps())
  }

  function handleExportImage({ filename, format }: ExportImageProps) {
    handleGenerateImage({
      format: format,
      success(image) {
        downloadDatasetsImage({ filename: filename, format: format, image: image })
      },
    })
  }

  function handleExportDatasets(idatasets: Dataset[], config: Config): void {
    handleChangeLoading(true)

    const datasetsDTO: ExportDatasetDTO[] = []
    const allErrors = [] as DatasetError[]

    for (const dataset of idatasets) {
      const [fields, errors] = dataset.exportFields({
        findOption: findType,
        findParent: findParent,
        searchRefField: searchRefField,
        fieldRoute: [],
      })

      if (errors.length === 0) {
        datasetsDTO.push({
          limit: dataset.limit,
          name: dataset.name,
          fields: fields,
        })
      } else {
        errors.forEach((error) => allErrors.push(error))
      }
    }

    if (allErrors.length > 0) {
      for (const error of allErrors) {
        toastChacaError(error)
      }

      handleChangeLoading(false)
    } else {
      exportDatasets({
        datasets: datasetsDTO,
        config: {
          type: config.file.type,
          arguments: config.file.arguments,
          name: config.file.name,
        },
        onError: toastChacaError,
        onFinally() {
          handleChangeLoading(false)
        },
      })
    }
  }

  return {
    handleExportDatasets,
    handleAddNewField,
    datasets,
    showFieldsMenu,
    handleExportImage,
    handleOpenDeleteAll,
    loading,
    handleOpenExportImage,
    handleOpenExportAllDatasets,
    handleOpenExportSelectedDataset,
  }
}
