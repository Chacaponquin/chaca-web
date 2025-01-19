import { ChacaSelect } from "@form/components"
import { SelectTypes } from "../../../domain/select-type"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ARRAY_VALUE_TYPE } from "@modules/dataset/domain/constants"

interface Props {
  types: SelectTypes[]
  handleChange(v: SelectTypes): void
  type: ARRAY_VALUE_TYPE
}

export default function SelectType({ types, handleChange, type }: Props) {
  const { TYPE } = useTranslation({ TYPE: { en: "Type", es: "Tipo" } })

  return (
    <ChacaSelect
      options={types}
      label={(t) => t.name}
      onChange={(v) => handleChange(v)}
      value={(o) => o.type === type}
      size="base"
      id="datatype-select"
      placeholder={TYPE}
    />
  )
}
