import { useDatasets, useDatatypes } from "@modules/datasets/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { EmptyFieldNameError, RepeatSameLevelFieldNameError } from "@modules/datasets/errors"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useToastServices } from "@modules/app/modules/toast/services"
import { useModal } from "@modules/modal/hooks"

interface Props {
  parentfieldId: string
  datasetId: string
}

export function useAddFieldForm({ datasetId, parentfieldId }: Props) {
  const fieldId = uuid()

  const { DEFAULT_SCHEMA_VALUE_DATA_TYPE } = useDatatypes({
    datasetId: datasetId,
    fieldId: fieldId,
  })

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
        field: fieldActions.field,
        parentfieldId: parentfieldId,
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

  return { handleAddField, fieldActions, datasetId }
}
