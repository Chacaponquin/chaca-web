import { useLanguage } from "@modules/shared/hooks"
import { ModalButtons, ModalTitle } from "../../shared/components"
import { useAddDatasetForm } from "./hooks/useAddDatasetForm"
import { ChacaTextInput } from "@form"

const AddDatasetForm = () => {
  const { datasetName, handleDatasetName, handleAddDataset } = useAddDatasetForm()

  const { TITLE, DATASET_NAME_LABEL, CREATE_DATASET_TEXT, FIELD_NAME_TEXT } = useLanguage({
    TITLE: { en: "New Dataset", es: "Crear Dataset" },
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre de dataset" },
    CREATE_DATASET_TEXT: { en: "Create Dataset", es: "Crear Dataset" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
  })

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={TITLE} />

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

      <ModalButtons type='edit' nextText={CREATE_DATASET_TEXT} handleNext={handleAddDataset} />
    </div>
  )
}

export default AddDatasetForm
