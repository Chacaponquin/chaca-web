import { useDatasetServices } from "@modules/datasets/services"
import { ModalContext } from "@modules/modal/context"
import { useContext } from "react"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useDatatypes } from "@modules/datasets/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"

export function useAddFieldForm(parentFieldID: string) {
  const { DEFAULT_SCHEMA_VALUE_DATA_TYPE } = useDatatypes()

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
  const { addField } = useDatasetServices()

  const fieldActions = useFieldForm({
    field: {
      id: uuid(),
      name: "",
      isArray: null,
      isPosibleNull: 0,
      dataType: DEFAULT_SCHEMA_VALUE_DATA_TYPE,
      isKey: false,
    },
  })

  const handleAddField = () => {
    try {
      addField(fieldActions.field, parentFieldID)
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { handleAddField, fieldActions }
}
