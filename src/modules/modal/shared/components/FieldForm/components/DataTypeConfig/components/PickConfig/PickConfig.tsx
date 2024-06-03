import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { ValuesForm } from "../../shared/components"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { ChacaNumberInput } from "@form/components"
import { PickNode } from "@modules/datasets/domain/tree/Field"
import { CountInfo } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  values: ArrayValue[]
  handleChangePickValues(values: ArrayValue[]): void
  handleChangePickCount(c: number): void
  count: number
}

export default function PickConfig({
  handleChangePickValues,
  values,
  handleChangePickCount,
  count,
}: Props) {
  const { COUNT } = useTranslation({ COUNT: { en: "Count", es: "Cantidad" } })

  return (
    <div className="flex flex-col gap-y-3 mb-1.5">
      <div className="grid grid-cols-1 exsm:grid-cols-2">
        <FormInputSection vertical={false} labelText={COUNT} info={<CountInfo />}>
          <ChacaNumberInput
            onChange={handleChangePickCount}
            value={count}
            size="sm"
            step={1}
            min={PickNode.MIN_COUNT_VALUE}
          />
        </FormInputSection>
      </div>

      <ValuesForm values={values} handleChangeValues={handleChangePickValues} />
    </div>
  )
}
