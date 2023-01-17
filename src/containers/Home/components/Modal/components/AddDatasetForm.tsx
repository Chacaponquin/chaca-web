import { InputText } from "primereact/inputtext"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { DatasetsContext } from "@shared/context"
import { useLanguage } from "@shared/hooks"
import { DATASETS_ACTIONS } from "@containers/Home/constants"
import { ModalButtons, ModalTitle } from "../shared/components"

const AddDatasetForm = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const { datasetDispatch } = useContext(DatasetsContext)

  const { TITLE, DATASET_NAME_LABEL, CREATE_DATASET_TEXT, FIELD_NAME_TEXT } = useLanguage({
    TITLE: { en: "New Dataset", es: "Crear Dataset" },
    DATASET_NAME_LABEL: { en: "Dataset name", es: "Nombre de dataset" },
    CREATE_DATASET_TEXT: { en: "Create Dataset", es: "Crear Dataset" },
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
  })

  const [datasetName, setDatasetName] = useState("")

  const handleAddDataset = () => {
    if (datasetName !== "") {
      // create dataset
      datasetDispatch({
        type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
        payload: { datasetName },
      })

      // close modal
      handleCloseModal()
    } else toast("The dataset name can not be an empty string")
  }

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={TITLE} handleCloseModal={handleCloseModal} />

      <div className='flex items-center gap-3'>
        <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
          {DATASET_NAME_LABEL}:
        </label>
        <InputText
          className='w-full'
          placeholder={FIELD_NAME_TEXT}
          value={datasetName}
          onChange={(e) => setDatasetName(e.target.value)}
        />
      </div>

      <ModalButtons
        type='edit'
        nextText={CREATE_DATASET_TEXT}
        handleCancel={handleCloseModal}
        handleNext={handleAddDataset}
      />
    </div>
  )
}

export default AddDatasetForm
