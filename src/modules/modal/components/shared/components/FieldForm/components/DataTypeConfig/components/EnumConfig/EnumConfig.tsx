import { ChacaTextarea } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { EnumField } from "@modules/datasets/domain/fields"

export default function EnumConfig({
  handleChangeEnumValues,
  values,
}: {
  handleChangeEnumValues: (v: string) => void
  values: Array<string>
}) {
  const { PLACEHOLDER } = useLanguage({ PLACEHOLDER: { en: "Values", es: "Valores" } })

  return (
    <div>
      <ChacaTextarea
        value={EnumField.transformArray(values)}
        height={"large"}
        placeholder={PLACEHOLDER}
        onChange={handleChangeEnumValues}
      />
    </div>
  )
}
