import { useDatasetServices } from "@modules/datasets/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"
import { useMenu } from "@modules/shared/hooks"
import { PanInfo } from "framer-motion"
import { createRef } from "react"
import { ChangeDatasetCardProps } from "../../../interfaces/card.interface"

interface Props {
  index: number
  handleCreateSelectDataset: (i: number) => void
  handleUpdateLines: () => void
  handleChangeDatasetCardPosition: (props: ChangeDatasetCardProps) => void
}

export default function useDatasetCard({
  handleCreateSelectDataset,
  index,
  handleUpdateLines,
  handleChangeDatasetCardPosition,
}: Props) {
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

  function handleDeleteDataset() {
    const dat = get(index)

    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: dat.name,
      datasetId: dat.id,
    })

    handleCloseMenu()
  }

  function handleEditDataset() {
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

  function onDrangEnd(datasetId: string, info: PanInfo) {
    handleChangeDatasetCardPosition({ datasetId: datasetId, x: info.point.x, y: info.point.y })
    handleUpdateLines()
  }

  return {
    openConfig: isOpen,
    handleInteractOpenConfig,
    handleDeleteDataset,
    handleEditDataset,
    handleExportDataset,
    handleClickCard,
    onDrangEnd,
  }
}
