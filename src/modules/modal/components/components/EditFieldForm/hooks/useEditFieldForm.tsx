import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { useFieldForm } from "../../../shared/hooks"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useModalServices } from "@modules/modal/services"

export function useEditFieldForm({
  field,
  parentFieldID,
  datasetId,
}: {
  field: DatasetField
  parentFieldID: string
  datasetId: string
}) {
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

  const { handleCloseModal } = useModalServices()
  const { handleUpdateField } = useDatasetServices()

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
      handleUpdateField({
        fieldDTO: fieldActions.field,
        parentFieldID: parentFieldID,
        datasetId: datasetId,
      })
      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toastError(EMPTY_NAME)
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toastError(REPEAT_NAME)
      }
    }
  }

  return { handleEditField, fieldActions, datasetId }
}
