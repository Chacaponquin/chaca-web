import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { useCode } from "@modules/modal/hooks"
import { useTypes } from "../../../hooks"

interface Props {
  values: ArrayValue[]
  handleChangeValues(v: ArrayValue[]): void
}

export default function useValuesForm({ values, handleChangeValues }: Props) {
  const { handleOpen } = useCode()
  const { valueTypes: types } = useTypes()

  function handleChangeSelectType(name: string, index: number) {
    const found = types.find((t) => t.name === name)

    if (found) {
      handleChangeValues(
        values.map((v, i) => {
          if (i === index) {
            v.value = found.defaultValue
            v.type = found.type
          }

          return v
        }),
      )
    }
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
      code: values[index].value as string,
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
