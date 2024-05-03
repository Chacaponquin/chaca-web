import { SelectTypes } from "../../interfaces"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function useTypes() {
  const { NUMBER, FUNCTION, STRING } = useTranslation({
    NUMBER: { en: "Number", es: "Número" },
    FUNCTION: { en: "Function", es: "Función" },
    STRING: { en: "String", es: "String" },
  })

  const valueTypes: SelectTypes[] = [
    { name: STRING, type: ARRAY_VALUE_TYPE.STRING },
    { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER },
    { name: "JSON", type: ARRAY_VALUE_TYPE.JSON },
  ]

  const chanceTypes: SelectTypes[] = [
    { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER },
    { name: FUNCTION, type: ARRAY_VALUE_TYPE.FUNCTION },
  ]

  return { valueTypes, chanceTypes }
}
