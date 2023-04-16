import { datasetServices } from "@modules/datasets/services"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldNode } from "@modules/shared/classes"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import clsx from "clsx"
import { useCallback } from "react"

export function useDataTypeSelect(selectField: FieldNode) {
  const { changeFieldDataType } = datasetServices()

  const { SINGLE_VALUE, CUSTOM_VALUE, REF_VALUE } = useLanguage({
    SINGLE_VALUE: { en: "Schema Value", es: "Schema Value" },
    REF_VALUE: { en: "Ref", es: "Referencia" },
    CUSTOM_VALUE: { en: "Custom", es: "Personalizado" },
  })

  const barClass = useCallback((select: boolean) => {
    return clsx(
      "h-[3px] w-full rounded-full bg-secondColor mt-2 transition-all duration-300",
      { "opacity-100": select },
      { "opacity-0": !select },
    )
  }, [])

  const textClass = useCallback((select: boolean) => {
    return clsx(
      "w-full text-center font-fontBold text-lg transition-all duration-300 hover:text-black",
      { "text-black": select },
      { "text-slate-400": !select },
    )
  }, [])

  const handleChangeDataType = (dataType: DATA_TYPES) => {
    changeFieldDataType(selectField.id, dataType)
  }

  const DATA_TYPES_OPTIONS = [
    { dataType: DATA_TYPES.SINGLE_VALUE, title: SINGLE_VALUE },
    { dataType: DATA_TYPES.REF, title: REF_VALUE },
    { dataType: DATA_TYPES.CUSTOM, title: CUSTOM_VALUE },
  ]

  return { barClass, textClass, handleChangeDataType, DATA_TYPES_OPTIONS }
}
