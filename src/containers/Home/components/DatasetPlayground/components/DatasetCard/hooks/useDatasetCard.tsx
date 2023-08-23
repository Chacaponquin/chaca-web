import { useDatasetServices } from "@modules/datasets/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"
import { useMenu } from "@modules/shared/hooks"
import { createRef } from "react"

export default function useDatasetCard() {
  const menuRef = createRef<HTMLDivElement | null>()
  const { handleCloseMenu, handleOpenMenu, isOpen } = useMenu({ ref: menuRef })
  const { handleOpenModal } = useModalServices()
  const { selectedDataset } = useDatasetServices()

  const handleInteractOpenConfig = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isOpen) {
      handleCloseMenu()
    } else {
      handleOpenMenu()
    }
  }

  const handleDeleteDataset = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: selectedDataset.name,
    })
    handleCloseMenu()
  }

  const handleEditDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_DATASET })
    handleCloseMenu()
  }

  const handleExportDataset = () => {
    handleCreateSelectDataset()
    handleCloseMenu()
  }

  return { openConfig: isOpen, handleInteractOpenConfig, handleDeleteDataset, handleEditDataset }
}
