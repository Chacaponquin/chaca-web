import { DATASETS_ACTIONS } from "@modules/datasets/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { ModalContext } from "@modules/modal/context"
import { useContext } from "react"

export function useFieldConfigMenu(field: DatasetField) {
  const { selectedDataset, datasetDispatch } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleEditField = () => {
    const findParent = selectedDataset.findFieldParentNode(field.id)

    if (findParent) {
      handleOpenModal({ type: MODAL_ACTIONS.EDIT_FIELD, field, parentFieldID: findParent.id })
    }
  }

  const handleAddField = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.ADD_FIELD,
      parentFieldID: field.id,
    })
  }

  const handleDeleteField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { fieldID: field.id, datasetID: selectedDataset.id },
    })
  }

  return { handleAddField, handleDeleteField, handleEditField }
}
