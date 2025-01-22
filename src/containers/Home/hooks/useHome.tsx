import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useDatasetServices } from "@modules/dataset/services"
import { usePlayground } from "@modules/playground/hooks"
import { useConfig } from "@modules/config/hooks"
import { ExportImageProps } from "../domain/props"
import {
  AddFieldModalProps,
  DeleteAllSchemasModalProps,
  ExportDatasetModalProps,
  ExportDatasetImageModalProps,
  ExportSchemaModalProps,
} from "../domain/modal"
import { Schema } from "@modules/dataset/domain/core/schema"
import { DatasetError } from "@modules/dataset/errors/dataset"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useContext } from "react"
import { HomeContext } from "../context"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { ExportSchemaDTO } from "@modules/dataset/dto/export"
import useModules from "@modules/modules/hooks/useModules"

export default function useHome() {
  const { handleChangeLoading } = useContext(HomeContext)
  const { dataset, selectedSchema, showFieldsMenu, searchRefField } = useDataset()
  const { handleOpenModal } = useModal()
  const { handleGenerateImage } = usePlayground()
  const { downloadDatasetsImage, exportDatasets } = useDatasetServices()
  const { loading: modulesLoading } = useModules()
  const { loading: configLoading } = useConfig()
  const { toastChacaError } = useToast()

  const loading = modulesLoading || configLoading

  function handleOpenExportDataset() {
    handleOpenModal(new ExportDatasetModalProps())
  }

  function handleOpenExportSelectedSchema() {
    if (selectedSchema) {
      handleOpenModal(new ExportSchemaModalProps(selectedSchema))
    }
  }

  function handleAddNewField() {
    if (selectedSchema) {
      handleOpenModal(new AddFieldModalProps(selectedSchema.id, selectedSchema.id))
    }
  }

  function handleOpenExportImage() {
    handleOpenModal(new ExportDatasetImageModalProps())
  }

  function handleOpenDeleteAll() {
    handleOpenModal(new DeleteAllSchemasModalProps())
  }

  function handleExportImage({ filename, format }: ExportImageProps) {
    handleGenerateImage({
      format: format,
      success(image) {
        downloadDatasetsImage({ filename: filename, format: format, image: image })
      },
    })
  }

  function handleExportDataset(idataset: Schema[], config: ExportFileConfigDTO): void {
    handleChangeLoading(true)

    const schemasDTO: ExportSchemaDTO[] = []
    const allErrors = [] as DatasetError[]

    for (const schema of idataset) {
      const [fields, errors] = schema.exportFields({
        searchRefField: searchRefField,
        fieldRoute: [],
      })

      if (errors.length === 0) {
        schemasDTO.push({
          limit: schema.limit,
          name: schema.name,
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
        dataset: schemasDTO,
        config: config,
        onError: toastChacaError,
        onFinally() {
          handleChangeLoading(false)
        },
      })
    }
  }

  return {
    handleExportDataset,
    handleAddNewField,
    dataset,
    showFieldsMenu,
    handleExportImage,
    handleOpenDeleteAll,
    loading,
    handleOpenExportImage,
    handleOpenExportDataset,
    handleOpenExportSelectedSchema,
  }
}
