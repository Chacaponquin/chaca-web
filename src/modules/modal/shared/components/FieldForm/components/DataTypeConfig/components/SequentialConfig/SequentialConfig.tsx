import { ChacaTextarea } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { SequentialField } from "@modules/datasets/domain/fields"

interface Props {
  values: Array<string>
  handleChangeSequentialValues(v: string): void
}

export default function SequentialConfig({ values, handleChangeSequentialValues }: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Values", es: "Valores" } })

  return (
    <ChacaTextarea
      value={SequentialField.transformArray(values)}
      height="large"
      placeholder={PLACEHOLDER}
      onChange={handleChangeSequentialValues}
      size="base"
      name="sequential-config"
    />
  )
}
