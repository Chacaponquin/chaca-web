import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useDatasetServices } from "@modules/datasets/services"
import { useContext } from "react"
import { HomeContext } from "../context"
import { usePlayground } from "@modules/playground/hooks"

export default function useHome() {
  const { exportDatasets } = useContext(HomeContext)
  const { datasets, selectedDataset, showFieldsMenu } = useDatasets()
  const { handleOpenModal } = useModal()
  const { handleGenerateImage } = usePlayground()
  const { downloadDatasetsImage } = useDatasetServices()

  function handleCreateAllDatasets() {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_ALL_DATASETS,
      handleCreateAllDatasets({ config }) {
        exportDatasets(datasets, config)
      },
    })
  }

  function handleExportSelectedDataset() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
        handleCreateSelectDataset({ config }) {
          exportDatasets([selectedDataset], config)
        },
      })
    }
  }

  function handleAddNewField() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.ADD_FIELD,
        parentfieldId: selectedDataset.id,
        datasetId: selectedDataset.id,
      })
    }
  }

  function handleExportImage() {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_IMAGE,
      next({ filename, format }) {
        handleGenerateImage({
          format: format,
          success(image) {
            downloadDatasetsImage({ filename: filename, format: format, image: image })
          },
        })
      },
    })
  }

  function handleDeleteAll() {
    handleOpenModal({ type: MODAL_ACTIONS.DELETE_ALL_DATASETS })
  }

  return {
    handleExportSelectedDataset,
    handleCreateAllDatasets,
    handleAddNewField,
    datasets,
    showFieldsMenu,
    handleExportImage,
    handleDeleteAll,
  }
}
