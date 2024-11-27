import { ChacaSelect } from "@form/components"
import { SelectTypes } from "../../../domain"
import { ARRAY_VALUE_TYPE } from "@modules/dataset/domain/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

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
      value={(t) => t.type === type}
      size="base"
      placeholder={TYPE}
    />
  )
}
