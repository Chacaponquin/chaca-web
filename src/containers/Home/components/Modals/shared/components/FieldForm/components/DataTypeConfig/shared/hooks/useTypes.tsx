import { SelectTypes } from "../../domain"
import { ARRAY_VALUE_TYPE, DatasetFunctions } from "@modules/datasets/domain/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useMemo } from "react"

export default function useTypes() {
  const { NUMBER, FUNCTION, STRING } = useTranslation({
    NUMBER: { en: "Number", es: "Número" },
    FUNCTION: { en: "Function", es: "Función" },
    STRING: { en: "String", es: "String" },
  })

  const valueTypes: SelectTypes[] = useMemo(() => {
    return [
      { name: STRING, type: ARRAY_VALUE_TYPE.STRING, defaultValue: "" },
      { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER, defaultValue: "0" },
      { name: "JSON", type: ARRAY_VALUE_TYPE.JSON, defaultValue: "{}" },
    ]
  }, [])

  const chanceTypes: SelectTypes[] = useMemo(() => {
    return [
      { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER, defaultValue: "0" },
      { name: FUNCTION, type: ARRAY_VALUE_TYPE.FUNCTION, defaultValue: DatasetFunctions.chance() },
    ]
  }, [])

  return { valueTypes, chanceTypes }
}
