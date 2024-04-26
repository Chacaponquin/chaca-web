import { ProbabilityValue } from "@modules/datasets/interfaces/dataset-field"
import { useConfig } from "./hooks"
import { AddButton, DeleteButton } from "../../shared/components"
import { Section } from "./components"

interface Props {
  handleChangeProbabilityValues(values: ProbabilityValue[]): void
  values: ProbabilityValue[]
}

export default function ProbabilityConfig({ handleChangeProbabilityValues, values }: Props) {
  const {
    chanceTypes,
    valueTypes,
    handleAdd,
    handleDelete,
    handleChangeChanceType,
    handleChangeValueType,
    handleChangeChance,
    handleChangeValue,
    handleOpenChanceCode,
    handleOpenValueCode,
  } = useConfig({
    values,
    handleChangeProbabilityValues,
  })

  return (
    <div className="flex flex-col w-full gap-y-1">
      {values.map((v, index) => (
        <div className="flex items-center" key={index}>
          <div className="flex items-center gap-x-2">
            <Section
              handleChange={handleChangeValue}
              type={v.value.type}
              value={v.value.value}
              index={index}
              handleChangeType={handleChangeValueType}
              handleOpenCode={handleOpenValueCode}
              length={values.length}
              types={valueTypes}
            />

            <Section
              index={index}
              types={chanceTypes}
              handleChange={handleChangeChance}
              type={v.chance.type}
              value={v.chance.value}
              length={values.length}
              handleOpenCode={handleOpenChanceCode}
              handleChangeType={handleChangeChanceType}
            />
          </div>

          <DeleteButton handleClick={() => handleDelete(index)} />
        </div>
      ))}

      <AddButton handleClick={handleAdd} />
    </div>
  )
}
