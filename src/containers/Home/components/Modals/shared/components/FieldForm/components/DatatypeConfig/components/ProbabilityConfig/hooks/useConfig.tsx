import { ProbabilityValue } from "@modules/dataset/domain/core/datatype"
import { useTypes } from "../../../shared/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/dataset/domain/constants"
import { useCode } from "@modules/modal/hooks"
import { SelectTypes } from "../../../domain/select-type"

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

  function handleChangeValueType(type: SelectTypes, index: number) {
    handleChangeProbabilityValues(
      values.map((v, i) => {
        if (i === index) {
          v.value.type = type.type
          v.value.value = type.defaultValue
        }

        return v
      }),
    )
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

  function handleChangeChanceType(type: SelectTypes, index: number) {
    handleChangeProbabilityValues(
      values.map((v, i) => {
        if (i === index) {
          v.chance.type = type.type
          v.chance.value = type.defaultValue
        }

        return v
      }),
    )
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
