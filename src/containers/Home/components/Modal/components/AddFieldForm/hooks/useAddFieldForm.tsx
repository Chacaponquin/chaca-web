import { datasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useContext } from "react"
import { toast } from "react-toastify"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"

export function useAddFieldForm(parentFieldID: string) {
  const { handleCloseModal } = useContext(ModalContext)
  const { addField } = datasetServices()

  const fieldActions = useFieldForm({
    id: uuid(),
    name: "",
    isArray: null,
    isPosibleNull: 0,
  })

  const handleAddField = () => {
    try {
      addField(fieldActions.field, parentFieldID)
      // close modal
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toast.error(`The field name can not be an empty string`)
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toast.error(`Aldready exists an field with that name`)
      }
    }
  }

  return { handleAddField, fieldActions }
}
