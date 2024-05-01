import { Dataset } from "@modules/datasets/domain/tree"
import { useDatasets } from "@modules/datasets/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModal } from "@modules/modal/hooks"
import { useCallback, useEffect } from "react"

interface Props {
  dataset: Dataset
  handleCreateDataset(dataset: Dataset): void
}

export default function useDatasetCard({
  dataset,
  handleCreateDataset: handleCreateDatasetProp,
}: Props) {
  const { handleOpenModal, openModal } = useModal()
  const {
    handleSelectDataset,
    handleCloneDataset: handleCloneDatasetHook,
    selectedDataset,
  } = useDatasets()

  const selected = selectedDataset?.id === dataset.id

  const handleKeyboardAction = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (selected && openModal === null) {
        if (event.key === "Delete") {
          handleDeleteDataset()
        }

        if (event.key === "Enter") {
          handleEditDataset()
        }
      }
    },
    [openModal, handleDeleteDataset, handleEditDataset],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardAction)

    return () => {
      document.removeEventListener("keydown", handleKeyboardAction)
    }
  }, [selected, handleKeyboardAction])

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

  function handleCloneDataset() {
    handleCloneDatasetHook({ id: dataset.id, handleCreateDataset: handleCreateDatasetProp })
  }

  return {
    handleDeleteDataset,
    handleEditDataset,
    handleCreateDataset,
    handleClickCard,
    handleCloneDataset,
    selected,
  }
}
