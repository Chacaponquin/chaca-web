import { Dataset } from "@modules/datasets/domain/tree"
import { useDatasets } from "@modules/datasets/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModal } from "@modules/modal/hooks"

interface Props {
  dataset: Dataset
  handleCreateDataset(dataset: Dataset): void
}

export default function useDatasetCard({
  dataset,
  handleCreateDataset: handleCreateDatasetProp,
}: Props) {
  const { handleOpenModal } = useModal()
  const { handleSelectDataset } = useDatasets()

  function handleDeleteDataset() {
    handleOpenModal({
      type: MODAL_ACTIONS.DELETE_DATASET,
      datasetName: dataset.name,
      datasetId: dataset.id,
    })
  }

  function handleEditDataset() {
    handleOpenModal({ type: MODAL_ACTIONS.EDIT_DATASET, dataset: dataset })
  }

  function handleCreateDataset() {
    handleCreateDatasetProp(dataset)
  }

  function handleClickCard() {
    handleSelectDataset(dataset.id)
  }

  return {
    handleDeleteDataset,
    handleEditDataset,
    handleCreateDataset,
    handleClickCard,
  }
}
