import { useDatasetServices } from "@modules/datasets/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"
import { useMenu } from "@modules/shared/hooks"
import { createRef } from "react"

export default function useDatasetCard({
  handleCreateSelectDataset,
  index,
}: {
  index: number
  handleCreateSelectDataset: (i: number) => void
}) {
  const menuRef = createRef<HTMLDivElement | null>()
  const { handleCloseMenu, handleOpenMenu, isOpen } = useMenu({ ref: menuRef })
  const { handleOpenModal } = useModalServices()
  const { handleSelectDataset } = useDatasetServices()
  const { get } = useDatasetServices()

  const handleInteractOpenConfig = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isOpen) {
      handleCloseMenu()
    } else {
      handleOpenMenu()
    }
  }

  const handleDeleteDataset = () => {
    const dat = get(index)

    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: dat.name,
    })
    handleCloseMenu()
  }

  const handleEditDataset = () => {
    const dat = get(index)

    handleOpenModal({ type: MODAL_ACTIONS.EDIT_DATASET, dataset: dat })
    handleCloseMenu()
  }

  const handleExportDataset = () => {
    handleCreateSelectDataset(index)
    handleCloseMenu()
  }

  function handleClickCard() {
    const dat = get(index)
    handleSelectDataset(dat.id)
  }

  return {
    openConfig: isOpen,
    handleInteractOpenConfig,
    handleDeleteDataset,
    handleEditDataset,
    handleExportDataset,
    handleClickCard,
  }
}
