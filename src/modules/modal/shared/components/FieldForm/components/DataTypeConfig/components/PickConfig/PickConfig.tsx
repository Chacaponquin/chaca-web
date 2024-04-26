import { ArrayValue } from "@modules/datasets/interfaces/dataset-field"
import { ValuesForm } from "../../shared/components"

interface Props {
  values: ArrayValue[]
  handleChangePickValues(values: ArrayValue[]): void
  handleChangePickCount(c: number): void
}

export default function PickConfig({ handleChangePickValues, values }: Props) {
  return <ValuesForm values={values} handleChangeValues={handleChangePickValues} />
}
