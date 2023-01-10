import { useState } from "react"
import { DatasetField } from "../../../../../../shared/interfaces/datasets.interface"

export const useFieldForm = (f: DatasetField) => {
  const [field, setField] = useState<DatasetField>(f)

  const handleChangeName = (name: string) => {
    setField({ ...field, name })
  }

  const handleChangeIsArray = (value: boolean) => {
    setField({
      ...field,
      isArray: value ? { min: 0, max: 10 } : null,
    })
  }

  const handleChangeMaxIsArray = (max: number | null) => {
    setField({
      ...field,
      isArray: {
        min: field.isArray!.min,
        max: max ? max : field.isArray!.min + 1,
      },
    })
  }

  const handleChangeMinIsArray = (min: number | null) => {
    setField({
      ...field,
      isArray: {
        max: field.isArray!.max,
        min: min ? min : 0,
      },
    })
  }

  const handleChangePossibleNull = (isNull: boolean) => {
    setField({ ...field, isPosibleNull: isNull ? 50 : 0 })
  }

  const handleChangePossibleNullValue = (value: number) => {
    setField({
      ...field,
      isPosibleNull: value,
    })
  }

  return {
    field,
    handleChangeIsArray,
    handleChangeName,
    handleChangeMaxIsArray,
    handleChangeMinIsArray,
    handleChangePossibleNull,
    handleChangePossibleNullValue,
  }
}
