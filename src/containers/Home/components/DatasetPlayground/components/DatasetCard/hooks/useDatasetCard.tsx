import { HomeContext } from "@containers/Home/context"
import {
  AddFieldCommand,
  CloneDatasetCommand,
  CommandsExecutor,
  DeleteDatasetCommand,
  EditDatasetCommand,
  ExportDatasetCommand,
} from "@modules/datasets/domain/commands"
import { Dataset } from "@modules/datasets/domain/dataset"
import { useDatasets } from "@modules/datasets/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModal } from "@modules/modal/hooks"
import { useContext, useEffect } from "react"

interface Props {
  dataset: Dataset
}

export default function useDatasetCard({ dataset }: Props) {
  const { handleExportDatasets } = useContext(HomeContext)
  const { handleOpenModal, openModal } = useModal()
  const {
    handleSelectDataset,
    handleCloneDataset: handleCloneDatasetHook,
    selectedDataset,
  } = useDatasets()

  const selected = selectedDataset?.id === dataset.id

  const commands = new CommandsExecutor([
    new DeleteDatasetCommand(handleDeleteDataset),
    new EditDatasetCommand(handleEditDataset),
    new CloneDatasetCommand(handleCloneDataset),
    new ExportDatasetCommand(handleCreateDataset),
    new AddFieldCommand(handleAddField),
  ])

  function handleKeyboardAction(event: globalThis.KeyboardEvent) {
    if (selected && openModal === null) {
      commands.execute(event)
    }
  }

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

  function handleClickCard() {
    handleSelectDataset(dataset.id)
  }

  function handleCloneDataset() {
    handleCloneDatasetHook({ id: dataset.id })
  }

  function handleAddField() {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      datasetId: dataset.id,
      parentfieldId: dataset.id,
    })
  }

  function handleCreateDataset(): void {
    handleOpenModal({
      type: MODAL_ACTIONS.EXPORT_SELECT_DATASET,
      handleCreateSelectDataset({ config }) {
        handleExportDatasets([dataset], config)
      },
    })
  }

  return {
    handleDeleteDataset,
    handleEditDataset,
    handleClickCard,
    handleCloneDataset,
    handleAddField,
    handleCreateDataset,
    selected,
  }
}
