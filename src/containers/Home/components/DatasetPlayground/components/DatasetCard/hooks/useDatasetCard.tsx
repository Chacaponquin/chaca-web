import {
  AddFieldModalProps,
  DeleteDatasetModalProps,
  EditDatasetModalProps,
  ExportDatasetModalProps,
} from "@containers/Home/domain/modal"
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
import { useModal } from "@modules/modal/hooks"
import { useEffect } from "react"

interface Props {
  dataset: Dataset
}

export default function useDatasetCard({ dataset }: Props) {
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
    handleOpenModal(new DeleteDatasetModalProps(dataset.name, dataset.id))
  }

  function handleEditDataset() {
    handleOpenModal(new EditDatasetModalProps(dataset))
  }

  function handleClickCard() {
    handleSelectDataset(dataset.id)
  }

  function handleCloneDataset() {
    handleCloneDatasetHook({ id: dataset.id })
  }

  function handleAddField() {
    handleOpenModal(new AddFieldModalProps(dataset.id, dataset.id))
  }

  function handleCreateDataset(): void {
    handleOpenModal(new ExportDatasetModalProps(dataset))
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
