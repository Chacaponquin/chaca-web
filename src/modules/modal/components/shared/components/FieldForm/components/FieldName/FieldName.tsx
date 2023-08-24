import { ChacaTextInput } from "@form/components"
import { FormInputSection } from "@modules/modal/components/shared/shared/components"
import { useId } from "react"

export default function FieldName({
  handleChangeName,
  text,
  name,
}: {
  handleChangeName: (v: string) => void
  text: string
  name: string
}) {
  const inputId = useId()
  return (
    <FormInputSection labelText={text} id={inputId}>
      <ChacaTextInput
        onChange={handleChangeName}
        placeholder="Field name..."
        value={name}
        dimension="large"
      />
    </FormInputSection>
  )
}
