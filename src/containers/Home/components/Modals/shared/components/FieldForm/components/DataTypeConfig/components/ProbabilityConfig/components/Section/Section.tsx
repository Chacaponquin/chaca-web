import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { SelectTypes } from "../../../../domain"
import { SelectType, ValueInput } from "../../../../shared/components"

interface Props {
  index: number
  handleChange(v: string, index: number): void
  handleOpenCode(index: number): void
  handleChangeType(v: SelectTypes, index: number): void
  types: SelectTypes[]
  value: string
  type: ARRAY_VALUE_TYPE
  length: number
}

export default function Section({
  handleChange,
  handleChangeType,
  handleOpenCode,
  index,
  length,
  type,
  types,
  value,
}: Props) {
  return (
    <div className="flex items-center gap-x-0.5">
      <ValueInput
        handleChange={(v) => handleChange(v, index)}
        type={type}
        handleClick={() => handleOpenCode(index)}
        valuesLength={length}
        value={value}
      />

      <SelectType type={type} handleChange={(v) => handleChangeType(v, index)} types={types} />
    </div>
  )
}
