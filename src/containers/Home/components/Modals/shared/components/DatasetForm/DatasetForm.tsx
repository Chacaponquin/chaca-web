import { ChacaNumberInput, ChacaTextInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormSection } from "../../shared/components"
import useUser from "@modules/user/hooks/useUser"

interface Props {
  name: string
  handleDatasetName(value: string): void
  limit: number
  handleChangeLimit(v: number): void
}

export default function DatasetForm({ name, handleDatasetName, limit, handleChangeLimit }: Props) {
  const { userLimits } = useUser()

  const { DATASET_NAME_LABEL, FIELD_NAME_TEXT, COUNT_DOCUMENTS } = useTranslation({
    DATASET_NAME_LABEL: { en: "Schema name", es: "Nombre" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    COUNT_DOCUMENTS: { en: "Count Document", es: "Documentos" },
  })

  return (
    <div className="flex flex-col gap-3">
      <FormSection vertical={true} labelText={DATASET_NAME_LABEL}>
        <ChacaTextInput
          placeholder={FIELD_NAME_TEXT}
          value={name}
          onChange={handleDatasetName}
          size="base"
          name="dataset-name"
          disabled={false}
          type="text"
          autoFocus={true}
        />
      </FormSection>

      <FormSection vertical={true} labelText={COUNT_DOCUMENTS}>
        <ChacaNumberInput
          value={limit}
          size="base"
          min={0}
          max={userLimits.LIMIT_SCHEMAS}
          onChange={handleChangeLimit}
        />
      </FormSection>
    </div>
  )
}
