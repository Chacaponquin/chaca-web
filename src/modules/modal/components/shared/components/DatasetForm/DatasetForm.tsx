import { ChacaNumberInput, ChacaTextInput } from "@form/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { useUserServices } from "@modules/user/services"

export default function DatasetForm({
  datasetName,
  handleDatasetName,
}: {
  datasetName: string
  handleDatasetName: (value: string) => void
}) {
  const { USER_DATASETS_LIMIT } = useUserServices()

  const { DATASET_NAME_LABEL, FIELD_NAME_TEXT, COUNT_DOCUMENTS } = useLanguage({
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre de dataset" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
    COUNT_DOCUMENTS: { en: "Count Document", es: "Documentos" },
  })

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="" className="font-fontMedium text-lg whitespace-nowrap">
          {DATASET_NAME_LABEL}:
        </label>
        <ChacaTextInput
          placeholder={FIELD_NAME_TEXT}
          value={datasetName}
          onChange={handleDatasetName}
        />
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="" className="font-fontMedium text-lg whitespace-nowrap">
          {COUNT_DOCUMENTS}:
        </label>

        <ChacaNumberInput value={20} min={0} max={USER_DATASETS_LIMIT} />
      </div>
    </div>
  )
}
