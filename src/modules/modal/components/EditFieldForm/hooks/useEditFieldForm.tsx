import { DatasetField } from "@modules/datasets/interfaces/datasets"
import { useDatasets } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useModal } from "@modules/modal/hooks"
import { FieldName } from "@modules/datasets/value-object"

interface Props {
  field: DatasetField
  parentfieldId: string
  datasetId: string
}

export default function useEditFieldForm({ field, parentfieldId, datasetId }: Props) {
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

  const { toastError } = useToast()

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
        field: { ...fieldActions.field, name: new FieldName(fieldActions.field.name) },
        parentfieldId: parentfieldId,
        datasetId: datasetId,
        oldName: field.name,
      })

      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toastError({ message: EMPTY_NAME })
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toastError({ message: REPEAT_NAME })
      }
    }
  }

  return { handleEditField, fieldActions, datasetId }
}
