import { ChacaTextInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormSection } from "../../../../shared/components"

interface Props {
  handleChangeName(v: string): void
  text: string
  name: string
}

export default function FieldName({ handleChangeName, text, name }: Props) {
  const { PLACEHOLDER } = useTranslation({
    PLACEHOLDER: { en: "Field name...", es: "Nombre del campo..." },
  })

  return (
    <FormSection vertical={true} labelText={text} className="mb-3">
      <ChacaTextInput
        onChange={handleChangeName}
        placeholder={PLACEHOLDER}
        value={name}
        size="base"
        disabled={false}
        type="text"
        name="field-name"
        autoFocus={true}
      />
    </FormSection>
  )
}
