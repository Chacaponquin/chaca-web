import { ArrayValue } from "@modules/datasets/domain/core/datatype"
import { ValuesForm } from "../../shared/components"

interface Props {
  handleChangeEnumValues(v: ArrayValue[]): void
  values: ArrayValue[]
}

export default function EnumConfig({ values, handleChangeEnumValues }: Props) {
  return <ValuesForm handleChangeValues={handleChangeEnumValues} values={values} />
}
