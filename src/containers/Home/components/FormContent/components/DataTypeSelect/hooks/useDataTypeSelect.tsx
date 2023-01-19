import { datasetServices } from "@modules/datasets/services"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FieldNode } from "@modules/shared/classes"
import clsx from "clsx"
import { useCallback } from "react"

export function useDataTypeSelect(selectField: FieldNode) {
  const { changeFieldDataType } = datasetServices()

  const barClass = useCallback((select: boolean) => {
    return clsx(
      "h-[3px] w-full rounded-full bg-secondColor mt-1 transition-all duration-300",
      { "opacity-100": select },
      { "opacity-0": !select },
    )
  }, [])

  const textClass = useCallback((select: boolean) => {
    return clsx(
      "mb-1 w-full text-center font-fontBold text-lg transition-all duration-300 hover:text-black",
      { "text-black": select },
      { "text-slate-400": !select },
    )
  }, [])

  const handleChangeDataType = (dataType: DATA_TYPES) => {
    changeFieldDataType(selectField.id, dataType)
  }

  return { barClass, textClass, handleChangeDataType }
}
