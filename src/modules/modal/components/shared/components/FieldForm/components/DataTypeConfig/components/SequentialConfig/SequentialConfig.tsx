import { ChacaTextarea } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { SequentialField } from "@modules/datasets/domain/fields"

interface Props {
  values: Array<string>
  handleChangeSequentialValues: (v: string) => void
}

export default function SequentialConfig({ values, handleChangeSequentialValues }: Props) {
  const { PLACEHOLDER } = useLanguage({ PLACEHOLDER: { en: "Values", es: "Valores" } })

  return (
    <div>
      <ChacaTextarea
        value={SequentialField.transformArray(values)}
        height={"large"}
        placeholder={PLACEHOLDER}
        onChange={handleChangeSequentialValues}
      />
    </div>
  )
}
