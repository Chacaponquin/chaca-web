import { AddFieldModalProps, EditFieldModalProps } from "@containers/Home/domain/modal"
import { Field } from "@modules/dataset/domain/core"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  field: Field
}

export function useFieldConfigMenu({ field }: Props) {
  const { selectedSchema, handleDeleteField: handleDeleteFieldService } = useDataset()
  const { handleOpenModal } = useModal()

  function handleEditField() {
    if (selectedSchema) {
      const findParent = selectedSchema.findFieldParentNode(field.id)

      if (findParent) {
        handleOpenModal(new EditFieldModalProps(field, findParent.id, selectedSchema.id))
      }
    }
  }

  function handleAddSubField() {
    if (selectedSchema) {
      handleOpenModal(new AddFieldModalProps(field.id, selectedSchema.id))
    }
  }

  function handleDeleteField() {
    if (selectedSchema) {
      handleDeleteFieldService({ fieldId: field.id, schemaId: selectedSchema.id })
    }
  }

  return { handleDeleteField, handleEditField, handleAddSubField }
}
