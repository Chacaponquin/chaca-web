import { useTranslation, useTranslationFunc } from "@modules/app/modules/language/hooks"

interface MessageFieldProps {
  field: string
}

interface NotEnoughValuesForRefProps {
  refField: string
  keyField: string
}

interface TryRefNotKeyProps {
  field: string
}

interface NotExistFieldProps {
  field: string
  refField: string
}

export default function useHomeTranslations() {
  const ERROR_MESSAGES = useTranslation({
    NETWORK_ERROR: { en: "Network connect error", es: "Error en la conexión" },
    CREATION_ERROR: { en: "Creation error", es: "Hubo un error en la creación de los datasets" },
    EMPTY_REF_FIELD_ERROR: {
      en: "Can't export a ref field that doesn't point to another field",
      es: "No se puede exportar un campo ref que no apunte a otro campo",
    },
  })

  const FUNCTION_ERROR_MESSAGES = useTranslationFunc({
    EMPTY_ENUM_FIELD: {
      en: (p: MessageFieldProps) => {
        return `The ${p.field} field is an enum and has no values to select from`
      },
      es: (p: MessageFieldProps) => {
        return `El campo ${p.field} es enum y no tiene valores para seleccionar`
      },
    },
    EMPTY_SEQUENTIAL_FIELD: {
      en: (p: MessageFieldProps) => {
        return `The field ${p.field} is sequential and has no values to generate`
      },
      es: (p: MessageFieldProps) => {
        return `El campo ${p.field} es sequencial y no tiene valores para generar`
      },
    },
    NOT_ENOUGH_VALUES_FOR_REF: {
      en: (p: NotEnoughValuesForRefProps) => {
        return `There are not enough values of field '${p.keyField}' for field '${p.refField}'`
      },
      es: (p: NotEnoughValuesForRefProps) => {
        return `No existen suficientes valores del campo '${p.keyField}' para el campo '${p.refField}'`
      },
    },
    CYCLIC_DATA: {
      en: () => {
        return `You are trying to access your data cyclically in one of your functions`
      },
      es: () => {
        return `Estás intentando acceder a tus datos de forma cíclica en alguna de tus funciones`
      },
    },
    TRY_REF_A_NOT_KEY_FIELD: {
      en: (p: TryRefNotKeyProps) => {
        return `You are trying to reference the field '${p.field}' without it being a key field`
      },
      es: (p: TryRefNotKeyProps) => {
        return `Estás intentando referenciar al campo '${p.field}' sin ser un campo llave`
      },
    },
    NOT_EXIST_FIELD: {
      en: (p: NotExistFieldProps) => {
        return `You are trying to reference from field '${p.refField}' to field '${p.field}, which does not exist'`
      },
      es: (p: NotExistFieldProps) => {
        return `Estás intentando referenciar desde el campo '${p.refField}' al campo '${p.field}, el cual no existe'`
      },
    },
  })

  return { ERROR_MESSAGES, FUNCTION_ERROR_MESSAGES }
}
