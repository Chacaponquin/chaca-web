import { ProbabilityValue } from "@modules/datasets/interfaces/dataset-field"
import { useConfig } from "./hooks"
import { AddButton, DeleteButton } from "../../shared/components"
import { ProbInfo, Section } from "./components"
import { Fragment } from "react"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Label } from "@modules/modal/components"

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

  const { PROBABILITY, VALUE } = useTranslation({
    VALUE: { en: "Value", es: "Valor" },
    PROBABILITY: { en: "Probability", es: "Probabilidad" },
  })

  return (
    <div className="flex flex-col w-full gap-y-1 mb-1.5">
      <div className="grid grid-cols-2 gap-x-2">
        <Label text={VALUE} />
        <Label text={PROBABILITY} info={<ProbInfo />} />

        {values.map((v, index) => (
          <Fragment key={index}>
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

            <div className="flex items-center">
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
              <DeleteButton handleClick={() => handleDelete(index)} />
            </div>
          </Fragment>
        ))}
      </div>

      <AddButton handleClick={handleAdd} />
    </div>
  )
}
