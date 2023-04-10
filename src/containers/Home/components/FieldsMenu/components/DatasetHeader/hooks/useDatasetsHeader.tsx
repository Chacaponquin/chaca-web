import { MODAL_ACTIONS } from "@modules/modal/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { ModalContext } from "@modules/modal/context"
import { useContext, createRef } from "react"
import { useMenu } from "@modules/shared/hooks"

export function useDatasetsHeader(handleCreateSelectDataset: () => void) {
  const menuRef = createRef<HTMLDivElement | null>()

  const { handleOpenMenu, handleCloseMenu, isOpen } = useMenu({ ref: menuRef })

  const { selectedDataset } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleNewDataset = () => {
    handleOpenModal({ type: MODAL_ACTIONS.ADD_DATASET })
    handleCloseMenu()
  }

  const handleInteractOpenConfig = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isOpen) {
      handleCloseMenu()
    } else {
      handleOpenMenu()
    }
  }

  const handleAddDatasetField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: selectedDataset.id,
    })
    handleCloseMenu()
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

  return {
    handleNewDataset,
    handleAddDatasetField,
    handleDeleteDataset,
    handleExportDataset,
    openConfig: isOpen,
    handleInteractOpenConfig,
    handleEditDataset,
    menuRef,
  }
}
