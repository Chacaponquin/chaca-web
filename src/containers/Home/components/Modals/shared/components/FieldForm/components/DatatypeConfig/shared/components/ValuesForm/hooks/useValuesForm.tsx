import { ARRAY_VALUE_TYPE } from "@modules/dataset/domain/constants"
import { ArrayValue } from "@modules/dataset/domain/core/datatype"
import { useCode } from "@modules/modal/hooks"
import { useTypes } from "../../../hooks"
import { SelectTypes } from "../../../../domain/select-type"

interface Props {
  values: ArrayValue[]
  handleChangeValues(v: ArrayValue[]): void
}

export default function useValuesForm({ values, handleChangeValues }: Props) {
  const { handleOpen } = useCode()
  const { valueTypes: types } = useTypes()

  function handleChangeSelectType(type: SelectTypes, index: number) {
    handleChangeValues(
      values.map((v, i) => {
        if (i === index) {
          v.value = type.defaultValue
          v.type = type.type
        }

        return v
      }),
    )
  }

  function handleChangeValue(value: string, index: number) {
    handleChangeValues(
      values.map((v, i) => {
        if (i === index) {
          v.value = value
        }

        return v
      }),
    )
  }

  function handleDeleteValue(index: number) {
    handleChangeValues(values.filter((_, i) => i !== index))
  }

  function handleAdd() {
    handleChangeValues([...values, { value: "", type: ARRAY_VALUE_TYPE.STRING }])
  }

  function handleClick(index: number) {
    handleOpen({
      language: "json",
      code: values[index].value,
      handleChange(code) {
        handleChangeValue(code, index)
      },
    })
  }

  return {
    handleChangeValue,
    types,
    handleChangeSelectType,
    handleDeleteValue,
    handleAdd,
    handleClick,
  }
}
