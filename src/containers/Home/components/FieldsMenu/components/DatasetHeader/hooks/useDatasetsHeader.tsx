import { MODAL_ACTIONS } from "@modules/modal/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { ModalContext } from "@modules/modal/context"
import { useState, useContext } from "react"

export function useDatasetsHeader(handleCreateSelectDataset: () => void) {
  const [openConfig, setOpenConfig] = useState(false)

  const { selectedDataset } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleNewDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_DATASET })
    setOpenConfig(false)
  }

  const handleInteractOpenConfig = () => {
    setOpenConfig(!openConfig)
  }

  const handleAddDatasetField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: selectedDataset.id,
    })
    setOpenConfig(false)
  }

  const handleDeleteDataset = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: selectedDataset.name,
    })
    setOpenConfig(false)
  }

  const handleEditDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_DATASET })
    setOpenConfig(false)
  }

  const handleExportDataset = () => {
    handleCreateSelectDataset()
    setOpenConfig(false)
  }

  return {
    handleNewDataset,
    handleAddDatasetField,
    handleDeleteDataset,
    handleExportDataset,
    openConfig,
    handleInteractOpenConfig,
    handleEditDataset,
  }
}
