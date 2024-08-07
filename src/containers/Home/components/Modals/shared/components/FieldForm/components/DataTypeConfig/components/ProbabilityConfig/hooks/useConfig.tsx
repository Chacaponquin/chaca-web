import { ProbabilityValue } from "@modules/datasets/interfaces/dataset-field"
import { useTypes } from "../../../shared/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { useCode } from "@modules/modal/hooks"

interface Props {
  values: ProbabilityValue[]
  handleChangeProbabilityValues(values: ProbabilityValue[]): void
}

export default function useConfig({ values, handleChangeProbabilityValues }: Props) {
  const { handleOpen } = useCode()
  const { chanceTypes, valueTypes } = useTypes()

  function handleAdd() {
    handleChangeProbabilityValues([
      ...values,
      {
        chance: { type: ARRAY_VALUE_TYPE.NUMBER, value: "" },
        value: { type: ARRAY_VALUE_TYPE.STRING, value: "" },
      },
    ])
  }

  function handleDelete(index: number) {
    handleChangeProbabilityValues(values.filter((_, i) => index !== i))
  }

  function handleChangeValue(newValue: string, index: number) {
    handleChangeProbabilityValues(
      values.map((v, i) => {
        if (i === index) {
          v.value.value = newValue
        }

        return v
      }),
    )
  }

  function handleChangeChance(newValue: string, index: number) {
    handleChangeProbabilityValues(
      values.map((v, i) => {
        if (i === index) {
          v.chance.value = newValue
        }

        return v
      }),
    )
  }

  function handleChangeValueType(name: string, index: number) {
    const found = valueTypes.find((t) => t.name === name)

    if (found) {
      const { defaultValue, type } = found

      handleChangeProbabilityValues(
        values.map((v, i) => {
          if (i === index) {
            v.value.type = type
            v.value.value = defaultValue
          }

          return v
        }),
      )
    }
  }

  function handleOpenValueCode(index: number) {
    handleOpen({
      code: values[index].value.value,
      handleChange(code) {
        handleChangeValue(code, index)
      },
      language: "json",
    })
  }

  function handleOpenChanceCode(index: number) {
    handleOpen({
      code: values[index].chance.value,
      handleChange(code) {
        handleChangeChance(code, index)
      },
      language: "javascript",
    })
  }

  function handleChangeChanceType(name: string, index: number) {
    const found = chanceTypes.find((t) => t.name === name)

    if (found) {
      const { defaultValue, type } = found

      handleChangeProbabilityValues(
        values.map((v, i) => {
          if (i === index) {
            v.chance.type = type
            v.chance.value = defaultValue
          }

          return v
        }),
      )
    }
  }

  return {
    chanceTypes,
    valueTypes,
    handleAdd,
    handleDelete,
    handleChangeChanceType,
    handleChangeValueType,
    handleChangeValue,
    handleChangeChance,
    handleOpenValueCode,
    handleOpenChanceCode,
  }
}
