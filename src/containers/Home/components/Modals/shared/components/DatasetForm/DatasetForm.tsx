import { ChacaNumberInput, ChacaTextInput } from "@form/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { FormSection } from "@modules/modal/components"
import { useUser } from "@modules/user/hooks"

interface Props {
  datasetName: string
  handleDatasetName(value: string): void
  limit: number
  handleChangeLimit(v: number): void
}

export default function DatasetForm({
  datasetName,
  handleDatasetName,
  limit,
  handleChangeLimit,
}: Props) {
  const { USER_DOCUMENTS_LIMIT } = useUser()

  const { DATASET_NAME_LABEL, FIELD_NAME_TEXT, COUNT_DOCUMENTS } = useTranslation({
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    COUNT_DOCUMENTS: { en: "Count Document", es: "Documentos" },
  })

  return (
    <div className="flex flex-col gap-3">
      <FormSection vertical={true} labelText={DATASET_NAME_LABEL}>
        <ChacaTextInput
          placeholder={FIELD_NAME_TEXT}
          value={datasetName}
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
          max={USER_DOCUMENTS_LIMIT}
          onChange={handleChangeLimit}
        />
      </FormSection>
    </div>
  )
}
