import { useDatasetServices } from "@modules/datasets/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"
import { PanInfo } from "framer-motion"
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
  const { handleOpenModal } = useModalServices()
  const { handleSelectDataset } = useDatasetServices()
  const { get } = useDatasetServices()

  function handleDeleteDataset() {
    const dat = get(index)

    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: dat.name,
      datasetId: dat.id,
    })
  }

  function handleEditDataset() {
    const dat = get(index)

    handleOpenModal({ type: MODAL_ACTIONS.EDIT_DATASET, dataset: dat })
  }

  const handleExportDataset = () => {
    handleCreateSelectDataset(index)
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
    handleDeleteDataset,
    handleEditDataset,
    handleExportDataset,
    handleClickCard,
    onDrangEnd,
  }
}
