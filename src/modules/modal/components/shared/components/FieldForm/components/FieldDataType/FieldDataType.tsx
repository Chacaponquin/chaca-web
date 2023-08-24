import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import FormInputSection from "../../../../shared/components/FormInputSection/FormInputSection"
import { useId } from "react"

export default function FieldDataType({
  label,
  handleChangeDataType,
  dataType,
}: {
  label: string
  handleChangeDataType: (i: number) => void
  dataType: DATA_TYPES
}) {
  const { DATA_TYPES_ARRAY, foundDataTypeByName } = useDatatypes()
  const foundDataType = foundDataTypeByName(dataType)

  const inputId = useId()

  return (
    <FormInputSection id={inputId} labelText={label}>
      <ChacaSelect
        id={inputId}
        placeholder="Tipo"
        options={DATA_TYPES_ARRAY}
        labelKey="title"
        valueKey="id"
        value={foundDataType.id}
        dimension="large"
        onChange={(v) => handleChangeDataType(v as number)}
      />
    </FormInputSection>
  )
}
