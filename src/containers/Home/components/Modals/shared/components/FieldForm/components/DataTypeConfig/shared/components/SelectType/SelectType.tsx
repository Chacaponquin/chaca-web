import { ChacaSelect } from "@form/components"
import { SelectTypes } from "../../../interfaces"
import { ARRAY_VALUE_TYPE } from "@modules/datasets/constants"
import { Fragment } from "react"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  types: SelectTypes[]
  handleChange(v: string): void
  type: ARRAY_VALUE_TYPE
}

export default function SelectType({ types, handleChange, type }: Props) {
  const { TYPE } = useTranslation({ TYPE: { en: "Type", es: "Tipo" } })

  const found = types.find((t) => t.type === type)

  return (
    <Fragment>
      {found && (
        <ChacaSelect
          options={types}
          labelKey="name"
          valueKey="name"
          onChange={(v) => handleChange(v as string)}
          value={found.name}
          size="base"
          placeholder={TYPE}
        />
      )}
    </Fragment>
  )
}
