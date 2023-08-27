import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { useModalServices } from "@modules/modal/services"

export function useFieldConfigMenu({ field }: { field: DatasetField }) {
  const { selectedDataset, handleDeleteField: handleDeleteFieldService } = useDatasetServices()
  const { handleOpenModal } = useModalServices()

  const handleEditField = () => {
    if (selectedDataset) {
      const findParent = selectedDataset.findFieldParentNode(field.id)

      if (findParent) {
        handleOpenModal({
          type: MODAL_ACTIONS.EDIT_FIELD,
          field,
          parentFieldID: findParent.id,
          datasetId: selectedDataset.id,
        })
      }
    }
  }

  const handleDeleteField = () => {
    if (selectedDataset) {
      handleDeleteFieldService({ fieldId: field.id, datasetId: selectedDataset.id })
    }
  }

  function handleAddField() {
    if (selectedDataset) {
      handleOpenModal({
        type: MODAL_ACTIONS.ADD_FIELD,
        parentFieldID: field.id,
        datasetId: selectedDataset.id,
      })
    }
  }

  return { handleAddField, handleDeleteField, handleEditField }
}
