import { ChacaNumberInput, ChacaTextInput } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useUserServices } from "@modules/user/services"
import { FormInputSection } from "../../shared/components"
import { useId } from "react"

export default function DatasetForm({
  datasetName,
  handleDatasetName,
  limit,
  handleChangeLimit,
}: {
  datasetName: string
  handleDatasetName: (value: string) => void
  limit: number
  handleChangeLimit: (v: number) => void
}) {
  const { USER_DATASETS_LIMIT } = useUserServices()

  const { DATASET_NAME_LABEL, FIELD_NAME_TEXT, COUNT_DOCUMENTS } = useLanguage({
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre de dataset" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    COUNT_DOCUMENTS: { en: "Count Document", es: "Documentos" },
  })

  const datasetNameId = useId()
  const datasetDocumentsId = useId()

  return (
    <div className="flex flex-col gap-3">
      <FormInputSection labelText={DATASET_NAME_LABEL} id={datasetNameId}>
        <ChacaTextInput
          placeholder={FIELD_NAME_TEXT}
          value={datasetName}
          onChange={handleDatasetName}
          id={datasetNameId}
          dimension="large"
        />
      </FormInputSection>

      <FormInputSection id={datasetDocumentsId} labelText={COUNT_DOCUMENTS}>
        <ChacaNumberInput
          value={limit}
          dimension="large"
          min={0}
          max={USER_DATASETS_LIMIT}
          id={datasetDocumentsId}
          onChange={handleChangeLimit}
        />
      </FormInputSection>
    </div>
  )
}
