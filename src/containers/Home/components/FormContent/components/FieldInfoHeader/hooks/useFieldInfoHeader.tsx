import { DATASETS_ACTIONS } from "@modules/datasets/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { ModalContext } from "@modules/modal/context"
import { FieldNode } from "@modules/shared/classes"
import { useContext, useMemo } from "react"

export function useFieldInfoHeader(selectField: FieldNode) {
  const { selectedDataset, datasetDispatch, handleDeleteSelectField } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleEdit = () => {
    handleOpenModal({
      type: MODAL_ACTIONS.EDIT_FIELD,
      field: selectField.getNodeObject(),
      location: selectedDataset.getFieldLocation(selectField.id),
    })
  }

  const handleDelete = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { datasetID: selectedDataset.id, fieldID: selectField.id },
    })

    handleDeleteSelectField()
  }

  const location = useMemo(() => {
    return selectedDataset.getFieldLocation(selectField.id)
  }, [selectField, selectedDataset])

  return { location, handleDelete, handleEdit }
}
