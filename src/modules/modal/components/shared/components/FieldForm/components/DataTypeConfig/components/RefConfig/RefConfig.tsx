import { ChacaSelect } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useDatasetServices } from "@modules/datasets/services"
import { FormInputSection } from "@modules/modal/components/shared/shared/components"
import { useId } from "react"

export default function RefConfig({ refField }: { refField: Array<string> }) {
  const fieldRefId = useId()
  const { searchPossibleFieldsToRef, findFieldByLocation } = useDatasetServices()

  const { REF_TEXT, PLACEHOLDER } = useLanguage({
    REF_TEXT: { en: "Ref", es: "Ref" },
    PLACEHOLDER: { en: "Select a field", es: "Selecciona un campo" },
  })

  const possibleFields = searchPossibleFieldsToRef()
  const foundField = findFieldByLocation(refField)

  return (
    <div className="flex flex-col">
      <FormInputSection id={fieldRefId} labelText={REF_TEXT}>
        <ChacaSelect
          dimension="large"
          options={possibleFields}
          labelKey="location"
          valueKey={"fieldId"}
          placeholder={PLACEHOLDER}
          value={foundField?.id}
        />
      </FormInputSection>
    </div>
  )
}
