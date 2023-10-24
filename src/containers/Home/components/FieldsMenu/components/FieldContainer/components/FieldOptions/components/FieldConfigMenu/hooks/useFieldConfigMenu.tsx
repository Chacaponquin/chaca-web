import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { useDatasets } from "@modules/datasets/hooks"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"

export function useFieldConfigMenu({ field }: { field: DatasetField }) {
  const { selectedDataset, handleDeleteField: handleDeleteFieldService } = useDatasets()
  const { handleOpenModal } = useModalServices()

  function handleEditField() {
    if (selectedDataset) {
      const findParent = selectedDataset.findFieldParentNode(field.id)

      if (findParent) {
        handleOpenModal({
          type: MODAL_ACTIONS.EDIT_FIELD,
          field,
          parentfieldId: findParent.id,
          datasetId: selectedDataset.id,
        })
      }
    }
  }

  function handleAddSubField() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.ADD_FIELD,
        datasetId: selectedDataset.id,
        parentfieldId: field.id,
      })
    }
  }

  function handleDeleteField() {
    if (selectedDataset) {
      handleDeleteFieldService({ fieldId: field.id, datasetId: selectedDataset.id })
    }
  }

  return { handleDeleteField, handleEditField, handleAddSubField }
}
