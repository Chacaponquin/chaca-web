import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useFieldForm } from "../../../shared/hooks"
import { useContext } from "react"

export function useEditFieldForm(field: DatasetField) {
  const { handleCloseModal } = useContext(ModalContext)
  const { updateField } = datasetServices()

  const fieldActions = useFieldForm({
    id: field.id,
    name: field.name,
    isArray: field.isArray,
    isPosibleNull: field.isPosibleNull,
  })

  const handleEditField = () => {
    updateField(fieldActions.field)
    handleCloseModal()
  }

  return { handleEditField, fieldActions }
}
