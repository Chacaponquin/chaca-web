import { ChacaSelect } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useDatasets } from "@modules/datasets/hooks"
import { FormInputSection } from "@modules/modal/shared/shared/components"
import { useId } from "react"

interface RefConfigProps {
  refField: string[]
  datasetId: string
  handleChangeRefField(r: string): void
  id: string
}

export default function RefConfig({
  refField,
  datasetId,
  handleChangeRefField,
  id,
}: RefConfigProps) {
  const fieldRefId = useId()
  const { searchPossibleFieldsToRef, findFieldByLocation } = useDatasets()

  const { REF_TEXT, PLACEHOLDER } = useTranslation({
    REF_TEXT: { en: "Reference field", es: "Referencia" },
    PLACEHOLDER: { en: "Select a field", es: "Selecciona un campo" },
  })

  const possibleFields = searchPossibleFieldsToRef({ datasetId, fieldId: id })
  const foundField = findFieldByLocation(refField)

  return (
    <div className="flex flex-col">
      <FormInputSection vertical={false} id={fieldRefId} labelText={REF_TEXT}>
        <ChacaSelect
          size="lg"
          options={possibleFields}
          labelKey="locationNames"
          valueKey="locationIds"
          placeholder={PLACEHOLDER}
          value={foundField?.id}
          onChange={handleChangeRefField}
        />
      </FormInputSection>
    </div>
  )
}
