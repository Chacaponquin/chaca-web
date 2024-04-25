import { useTranslation } from "@modules/app/modules/language/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { useCode } from "@modules/modal/hooks"

interface Props {
  values: ArrayValue[]
  handleChangeValues(v: ArrayValue[]): void
}

interface SelectTypes {
  name: string
  type: ARRAY_VALUE_TYPE
}

export default function useValuesForm({ values, handleChangeValues }: Props) {
  const { handleOpen } = useCode()
  const { NUMBER } = useTranslation({ NUMBER: { en: "Number", es: "Número" } })

  const types: SelectTypes[] = [
    { name: "String", type: ARRAY_VALUE_TYPE.STRING },
    { name: NUMBER, type: ARRAY_VALUE_TYPE.NUMBER },
    { name: "JSON", type: ARRAY_VALUE_TYPE.JSON },
  ]

  function findType(type: ARRAY_VALUE_TYPE): SelectTypes {
    return types.find((t) => t.type === type) as SelectTypes
  }

  function handleChangeSelectType(name: string, index: number) {
    const found = types.find((t) => t.name === name)

    if (found) {
      handleChangeValues(
        values.map((v, i) => {
          if (i === index) {
            v.value = ""
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
      handleChange: (code) => {
        handleChangeValues(
          values.map((v, i) => {
            if (i === index) {
              v.value = code
            }

            return v
          }),
        )
      },
    })
  }

  return {
    handleChangeValue,
    types,
    handleChangeSelectType,
    handleDeleteValue,
    handleAdd,
    findType,
    handleClick,
  }
}
