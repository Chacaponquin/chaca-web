import { DATASETS_ACTIONS } from "@modules/datasets/constants"
import { DatasetsContext } from "@modules/datasets/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"
import { ModalContext } from "@modules/modal/context"
import { FieldNode } from "@modules/datasets/domain"
import { useContext, useMemo } from "react"

export function useFieldInfoHeader(selectField: FieldNode) {
  const { selectedDataset, datasetDispatch, handleDeleteSelectField } = useContext(DatasetsContext)
  const { handleOpenModal } = useContext(ModalContext)

  const handleEdit = () => {
    const findParent = selectedDataset.findFieldParentNode(selectField.id)

    if (findParent) {
      handleOpenModal({
        type: MODAL_ACTIONS.EDIT_FIELD,
        field: selectField.getNodeObject(),
        parentFieldID: findParent.id,
      })
    }
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
