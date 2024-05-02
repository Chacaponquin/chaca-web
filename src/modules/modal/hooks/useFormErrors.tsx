import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import {
  EmptyArrayValueError,
  EmptyDatasetNameError,
  EmptyFieldNameError,
  EmptyRefFieldError,
  EmptyValuesError,
  InvalidArrayJSONValue,
  InvalidArrayNumberValue,
  InvalidChanceValueError,
  RepeatDatasetNameError,
  RepeatSameLevelFieldNameError,
} from "@modules/datasets/errors"

export default function useFormErrors() {
  const { toastError } = useToast()

  const {
    REPEAT_NAME,
    EMPTY_NAME,
    EMPTY_ARRAY_VALUE,
    INVALID_NUMBER,
    INVALID_JSON,
    EMPTY_ARRAY,
    INVALID_CHANGE_VALUE,
    EMPTY_REF_FIELD,
  } = useTranslation({
    REPEAT_NAME: {
      en: `Aldready exists an field with that name`,
      es: "Ya existe un campo con este nombre",
    },
    EMPTY_NAME: {
      en: `The field name can not be an empty string`,
      es: "El nombre del nuevo campo no puede estar vacío",
    },
    INVALID_NUMBER: {
      en: "Values that are numbers cannot include characters other than digits",
      es: "Los valores que son números no pueden incluir caracteres que no seas dígitos",
    },
    EMPTY_ARRAY_VALUE: {
      en: "None of the possible values can be empty",
      es: "Ninguno de los posibles valores puede estar vacío",
    },
    INVALID_JSON: {
      en: "Values that are of type JSON must have valid syntax",
      es: "Los valores que son de tipo JSON deben tener una sintáxis válida",
    },
    EMPTY_ARRAY: {
      en: "You must insert at least one value that can be chosen",
      es: "Debes insertar al menos un valor que puede ser escogido",
    },
    INVALID_CHANGE_VALUE: {
      en: "The probabilities values must be between 0 and 1",
      es: "Los valores para las probabilidades deben encontrarse entre 0 y 1",
    },
    EMPTY_REF_FIELD: {
      en: "If the field is going to be a reference field you must reference a field from another dataset",
      es: "Si el campo va a ser un campo referencia debes referenciar algún campo de otro dataset",
    },
  })

  const { EMPTY_DATASET_NAME, REPEAT_DATASET_NAME } = useTranslation({
    EMPTY_DATASET_NAME: {
      en: "Aldready exists a dataset with that name",
      es: "Ya existe un dataset con ese nombre",
    },
    REPEAT_DATASET_NAME: {
      en: "The dataset name can not be an empty string",
      es: "El nombre del nuevo dataset no puede estar vacío",
    },
  })

  function handleError(error: Error) {
    if (error instanceof EmptyFieldNameError) {
      toastError({ message: EMPTY_NAME, id: "field-empty-name" })
    } else if (error instanceof RepeatSameLevelFieldNameError) {
      toastError({ message: REPEAT_NAME, id: "field-repeat-name" })
    } else if (error instanceof InvalidArrayNumberValue) {
      toastError({ message: INVALID_NUMBER, id: "invalid-array-number" })
    } else if (error instanceof EmptyArrayValueError) {
      toastError({ message: EMPTY_ARRAY_VALUE, id: "empty-array-value" })
    } else if (error instanceof InvalidArrayJSONValue) {
      toastError({ message: INVALID_JSON, id: "invalid-array-json" })
    } else if (error instanceof EmptyValuesError) {
      toastError({ message: EMPTY_ARRAY, id: "empty-array-values" })
    } else if (error instanceof EmptyDatasetNameError) {
      toastError({ message: EMPTY_DATASET_NAME, id: "empty-dataset-name" })
    } else if (error instanceof RepeatDatasetNameError) {
      toastError({ message: REPEAT_DATASET_NAME, id: "repeat-dataset-name" })
    } else if (error instanceof InvalidChanceValueError) {
      toastError({ message: INVALID_CHANGE_VALUE, id: "invalid-change-value" })
    } else if (error instanceof EmptyRefFieldError) {
      toastError({ id: "empty-ref-field", message: EMPTY_REF_FIELD })
    }
  }

  return { handleError }
}
