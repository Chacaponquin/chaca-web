import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { useDatasets } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useModal } from "@modules/modal/hooks"

interface Props {
  field: DatasetField
  parentfieldId: string
  datasetId: string
}

export function useEditFieldForm({ field, parentfieldId, datasetId }: Props) {
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

  const { handleCloseModal } = useModal()
  const { handleUpdateField } = useDatasets()

  const fieldActions = useFieldForm({
    field: {
      id: field.id,
      name: field.name,
      isArray: field.isArray,
      isPossibleNull: field.isPossibleNull,
      dataType: field.dataType,
      isKey: field.isKey,
    },
    datasetId: datasetId,
  })

  function handleEditField() {
    try {
      handleUpdateField({
        field: fieldActions.field,
        parentfieldId: parentfieldId,
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
