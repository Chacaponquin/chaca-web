import { ChacaTextarea } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { EnumField } from "@modules/datasets/domain/fields"

interface Props {
  handleChangeEnumValues(v: string): void
  values: Array<string>
}

export default function EnumConfig({ handleChangeEnumValues, values }: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Values", es: "Valores" } })

  return (
    <div>
      <ChacaTextarea
        value={EnumField.transformArray(values)}
        height={"large"}
        placeholder={PLACEHOLDER}
        onChange={handleChangeEnumValues}
        size="base"
        name="enum-config"
      />
    </div>
  )
}
