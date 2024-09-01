import {
  AddFieldModalProps,
  DeleteSchemaModalProps,
  EditSchemaModalProps,
  ExportDatasetModalProps,
} from "@containers/Home/domain/modal"
import {
  AddFieldCommand,
  CloneDatasetCommand,
  CommandsExecutor,
  DeleteDatasetCommand,
  EditDatasetCommand,
  ExportDatasetCommand,
} from "@modules/dataset/domain/commands"
import { Schema } from "@modules/dataset/domain/core"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useEffect } from "react"

interface Props {
  schema: Schema
}

export default function useSchemaCard({ schema }: Props) {
  const { handleOpenModal, openModal } = useModal()
  const {
    handleSelectDataset,
    handleCloneSchema: handleCloneDatasetHook,
    selectedSchema,
  } = useDataset()

  const selected = selectedSchema?.id === schema.id

  const commands = new CommandsExecutor([
    new DeleteDatasetCommand(handleDeleteSchema),
    new EditDatasetCommand(handleEditSchema),
    new CloneDatasetCommand(handleCloneSchema),
    new ExportDatasetCommand(handleCreateSchema),
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

  function handleDeleteSchema() {
    handleOpenModal(new DeleteSchemaModalProps(schema.name, schema.id))
  }

  function handleEditSchema() {
    handleOpenModal(new EditSchemaModalProps(schema))
  }

  function handleClickCard() {
    handleSelectDataset(schema.id)
  }

  function handleCloneSchema() {
    handleCloneDatasetHook({ id: schema.id })
  }

  function handleAddField() {
    handleOpenModal(new AddFieldModalProps(schema.id, schema.id))
  }

  function handleCreateSchema(): void {
    handleOpenModal(new ExportDatasetModalProps())
  }

  return {
    handleDeleteSchema,
    handleEditSchema,
    handleClickCard,
    handleCloneSchema,
    handleAddField,
    handleCreateSchema,
    selected,
  }
}
