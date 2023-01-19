import { datasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useContext } from "react"
import { toast } from "react-toastify"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"

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
      toast.error("The field name can not be an empty string")
    }
  }

  return { handleAddField, fieldActions }
}
