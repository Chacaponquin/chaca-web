import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FormInputSection } from "../../../../shared/components"
import { useId } from "react"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  label: string
  handleChangeDataType(i: string): void
  dataType: DATA_TYPES
  fieldId: string
  datasetId: string
}

export default function FieldDataType({
  label,
  handleChangeDataType,
  dataType,
  datasetId,
  fieldId,
}: Props) {
  const { PLACEHOLDER } = useTranslation({ PLACEHOLDER: { en: "Datatype", es: "Tipo de dato" } })

  const { DATA_TYPES_ARRAY } = useDatatypes({ fieldId, datasetId })
  const found = DATA_TYPES_ARRAY.find((d) => d.default.type === dataType)

  const inputId = useId()

  return (
    <FormInputSection vertical={true} id={inputId} labelText={label}>
      {found && (
        <ChacaSelect
          id={inputId}
          placeholder={PLACEHOLDER}
          options={DATA_TYPES_ARRAY.filter((d) => d.condition)}
          labelKey="title"
          valueKey="id"
          value={found.id}
          size="base"
          onChange={(v) => handleChangeDataType(v as string)}
        />
      )}

      {found && found.info({})}
    </FormInputSection>
  )
}
