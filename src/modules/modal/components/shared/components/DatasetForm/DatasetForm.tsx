import { ChacaTextInput } from "@form"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

export default function DatasetForm({
  datasetName,
  handleDatasetName,
}: {
  datasetName: string
  handleDatasetName: (value: string) => void
}) {
  const { DATASET_NAME_LABEL, FIELD_NAME_TEXT } = useLanguage({
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre de dataset" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
  })

  return (
    <div className='flex items-center gap-3'>
      <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
        {DATASET_NAME_LABEL}:
      </label>
      <ChacaTextInput
        placeholder={FIELD_NAME_TEXT}
        value={datasetName}
        onChange={handleDatasetName}
      />
    </div>
  )
}
