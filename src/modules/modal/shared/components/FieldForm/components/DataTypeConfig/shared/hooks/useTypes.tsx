import { SelectTypes } from "../../interfaces"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function useTypes() {
  const { NUMBER } = useTranslation({ NUMBER: { en: "Number", es: "Número" } })

  const valueTypes: SelectTypes[] = [
    { name: "String", type: ARRAY_VALUE_TYPE.STRING },
    { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER },
    { name: "JSON", type: ARRAY_VALUE_TYPE.JSON },
  ]

  const chanceTypes: SelectTypes[] = [
    { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER },
    { name: "Function", type: ARRAY_VALUE_TYPE.FUNCTION },
  ]

  return { valueTypes, chanceTypes }
}
