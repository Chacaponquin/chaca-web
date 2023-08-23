import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useFieldForm } from "../../../shared/hooks"
import { useContext } from "react"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"

export function useEditFieldForm(field: DatasetField, parentFieldID: string) {
  const { REPEAT_NAME, EMPTY_NAME } = useLanguage({
    REPEAT_NAME: {
      en: `Aldready exists an field with that name`,
      es: "Ya existe un campo con este nombre",
    },
    EMPTY_NAME: {
      en: `The field name can not be an empty string`,
      es: "El nombre del nuevo campo no puede estar vacío",
    },
  })

  const { toastError } = useToastServices()

  const { handleCloseModal } = useContext(ModalContext)
  const { updateField } = useDatasetServices()

  const fieldActions = useFieldForm({
    field: {
      id: field.id,
      name: field.name,
      isArray: field.isArray,
      isPosibleNull: field.isPosibleNull,
      dataType: field.dataType,
      isKey: field.isKey,
    },
  })

  const handleEditField = () => {
    try {
      updateField(fieldActions.field, parentFieldID)
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { handleEditField, fieldActions }
}
