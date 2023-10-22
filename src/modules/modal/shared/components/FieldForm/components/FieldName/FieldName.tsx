import { ChacaTextInput } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"

interface Props {
  handleChangeName: (v: string) => void
  text: string
  name: string
}

export default function FieldName({ handleChangeName, text, name }: Props) {
  const inputId = useId()

  const { PLACEHOLDER } = useLanguage({
    PLACEHOLDER: { en: "Field name...", es: "Nombre del campo..." },
  })

  return (
    <FormInputSection labelText={text} id={inputId}>
      <ChacaTextInput
        onChange={handleChangeName}
        placeholder={PLACEHOLDER}
        value={name}
        dimension="large"
      />
    </FormInputSection>
  )
}
