import { AddFieldModalProps, EditFieldModalProps } from "@containers/Home/domain/modal"
import { Field } from "@modules/datasets/domain/core"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  field: Field
}

export function useFieldConfigMenu({ field }: Props) {
  const { selectedDataset, handleDeleteField: handleDeleteFieldService } = useDatasets()
  const { handleOpenModal } = useModal()

  function handleEditField() {
    if (selectedDataset) {
      const findParent = selectedDataset.findFieldParentNode(field.id)

      if (findParent) {
        handleOpenModal(new EditFieldModalProps(field, findParent.id, selectedDataset.id))
      }
    }
  }

  function handleAddSubField() {
    if (selectedDataset) {
      handleOpenModal(new AddFieldModalProps(field.id, selectedDataset.id))
    }
  }

  function handleDeleteField() {
    if (selectedDataset) {
      handleDeleteFieldService({ fieldId: field.id, datasetId: selectedDataset.id })
    }
  }

  return { handleDeleteField, handleEditField, handleAddSubField }
}
