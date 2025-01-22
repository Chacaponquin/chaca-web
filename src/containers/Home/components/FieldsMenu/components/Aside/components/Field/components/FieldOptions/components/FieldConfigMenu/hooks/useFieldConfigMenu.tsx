import { AddFieldModalProps, EditFieldModalProps } from "@containers/Home/domain/modal"
import { Field } from "@modules/dataset/domain/core/field"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  field: Field
  onClose(): void
}

export function useFieldConfigMenu({ field, onClose }: Props) {
  const { selectedSchema, handleDeleteField: handleDeleteFieldService } = useDataset()
  const { handleOpenModal } = useModal()

  function handleEditField() {
    if (selectedSchema) {
      const findParent = selectedSchema.findFieldParentNode(field.id)

      if (findParent) {
        handleOpenModal(new EditFieldModalProps(field, findParent.id, selectedSchema.id))
        onClose()
      }
    }
  }

  function handleAddSubField() {
    if (selectedSchema) {
      handleOpenModal(new AddFieldModalProps(field.id, selectedSchema.id))
      onClose()
    }
  }

  function handleDeleteField() {
    if (selectedSchema) {
      handleDeleteFieldService({ fieldId: field.id, schemaId: selectedSchema.id })
      onClose()
    }
  }

  return { handleDeleteField, handleEditField, handleAddSubField }
}
