import { useLanguage } from "@modules/app/modules/language/hooks"
import { DatasetForm, ModalButtons, ModalTitle } from "../../shared/components"
import { useAddDatasetForm } from "./hooks/useAddDatasetForm"

const AddDatasetForm = () => {
  const { datasetName, handleDatasetName, handleAddDataset } = useAddDatasetForm()

  const { TITLE, CREATE_DATASET_TEXT } = useLanguage({
    TITLE: { en: "New Dataset", es: "Crear Dataset" },
    CREATE_DATASET_TEXT: { en: "Create Dataset", es: "Crear Dataset" },
  })

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={TITLE} />
      <DatasetForm datasetName={datasetName} handleDatasetName={handleDatasetName} />
      <ModalButtons type='edit' nextText={CREATE_DATASET_TEXT} handleNext={handleAddDataset} />
    </div>
  )
}

export default AddDatasetForm
