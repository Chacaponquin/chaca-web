import { useDatasets, useDatatypes } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { useModal } from "@modules/modal/hooks"
import { FieldName } from "@modules/datasets/value-object"

interface Props {
  parentfieldId: string
  datasetId: string
}

export default function useAddFieldForm({ datasetId, parentfieldId }: Props) {
  const fieldId = uuid()

  const { DEFAULT_SCHEMA_VALUE_DATA_TYPE } = useDatatypes({
    datasetId: datasetId,
    fieldId: fieldId,
  })

  const { REPEAT_NAME, EMPTY_NAME } = useTranslation({
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
  const { handleAddField: handleAddFieldService } = useDatasets()

  const fieldActions = useFieldForm({
    field: {
      id: fieldId,
      name: "",
      isArray: null,
      isPossibleNull: 0,
      dataType: DEFAULT_SCHEMA_VALUE_DATA_TYPE,
      isKey: false,
    },
    datasetId: datasetId,
  })

  function handleAddField() {
    try {
      handleAddFieldService({
        datasetId: datasetId,
        field: { ...fieldActions.field, name: new FieldName(fieldActions.field.name) },
        parentfieldId: parentfieldId,
      })

      handleCloseModal()
    } catch (error) {
      if (error instanceof EmptyFieldNameError) {
        toastError({ message: EMPTY_NAME, id: "empty-field-name" })
      } else if (error instanceof RepeatSameLevelFieldNameError) {
        toastError({ message: REPEAT_NAME, id: "repeat-field-name" })
      }
    }
  }

  return { handleAddField, fieldActions, datasetId }
}
