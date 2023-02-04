import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useFieldForm } from "../../../shared/hooks"
import { useContext } from "react"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { toast } from "react-toastify"

export function useEditFieldForm(field: DatasetField, parentFieldID: string) {
  const { handleCloseModal } = useContext(ModalContext)
  const { updateField } = datasetServices()

  const fieldActions = useFieldForm({
    id: field.id,
    name: field.name,
    isArray: field.isArray,
    isPosibleNull: field.isPosibleNull,
  })

  const handleEditField = () => {
    try {
      updateField(fieldActions.field, parentFieldID)
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toast.error(`The field name can not be an empty string`)
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toast.error(`Aldready exists an field with that name`)
      }
    }
  }

  return { handleEditField, fieldActions }
}
