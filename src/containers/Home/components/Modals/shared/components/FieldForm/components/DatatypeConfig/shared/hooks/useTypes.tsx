import { SelectTypes } from "../../domain/select-type"
import { ARRAY_VALUE_TYPE, DatasetFunctions } from "@modules/dataset/domain/constants"
import { useLanguage, useTranslation } from "@modules/app/modules/language/hooks"
import { useMemo } from "react"

export default function useTypes() {
  const { language } = useLanguage()
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
  }, [language])

  const chanceTypes: SelectTypes[] = useMemo(() => {
    return [
      { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER, defaultValue: "0" },
      { name: FUNCTION, type: ARRAY_VALUE_TYPE.FUNCTION, defaultValue: DatasetFunctions.chance() },
    ]
  }, [language])

  return { valueTypes, chanceTypes }
}
