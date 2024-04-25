import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import {
  EmptyArrayValueError,
  EmptyFieldNameError,
  InvalidArrayJSONValue,
  InvalidArrayNumberValue,
  RepeatSameLevelFieldNameError,
} from "@modules/datasets/errors"

export default function useFormErrors() {
  const { toastError } = useToast()

  const { REPEAT_NAME, EMPTY_NAME, EMPTY_ARRAY_VALUE, INVALID_NUMBER, INVALID_JSON } =
    useTranslation({
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
    }
  }

  return { handleError }
}
