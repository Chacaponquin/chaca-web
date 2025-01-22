import {
  AddFieldModalProps,
  DeleteSchemaModalProps,
  EditSchemaModalProps,
  ExportDatasetModalProps,
} from "@containers/Home/domain/modal"
import { CommandsExecutor } from "@modules/app/domain/command"
import useCommands from "@modules/app/hooks/useCommands"
import {
  AddFieldCommand,
  CloneDatasetCommand,
  DeleteDatasetCommand,
  EditSchemaCommand,
  ExportDatasetCommand,
} from "@modules/dataset/domain/commands"
import { Schema } from "@modules/dataset/domain/core/schema"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useMemo } from "react"

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

  const selected = useMemo(() => selectedSchema?.id === schema.id, [schema, selectedSchema])

  const commands = new CommandsExecutor([
    new DeleteDatasetCommand(handleDeleteSchema),
    new EditSchemaCommand(handleEditSchema),
    new CloneDatasetCommand(handleCloneSchema),
    new ExportDatasetCommand(handleCreateSchema),
    new AddFieldCommand(handleAddField),
  ])

  useCommands({ executor: commands, condition: selected && openModal === null ? true : false })

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
