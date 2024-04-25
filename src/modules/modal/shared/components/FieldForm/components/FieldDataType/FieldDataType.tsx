import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { FormInputSection } from "../../../../shared/components"
import { useId } from "react"

interface Props {
  label: string
  handleChangeDataType(i: number): void
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
  const { DATA_TYPES_ARRAY, foundDataTypeByName } = useDatatypes({ fieldId, datasetId })
  const foundDataType = foundDataTypeByName(dataType)

  const inputId = useId()

  return (
    <FormInputSection vertical={true} id={inputId} labelText={label}>
      <ChacaSelect
        id={inputId}
        placeholder="Tipo"
        options={DATA_TYPES_ARRAY.filter((d) => d.condition)}
        labelKey="title"
        valueKey="id"
        value={foundDataType.id}
        size="lg"
        onChange={(v) => handleChangeDataType(v as number)}
      />
    </FormInputSection>
  )
}
