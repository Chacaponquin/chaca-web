import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { DatasetForm, ModalButtons, ModalTitle } from "../../shared/components"
import { useEditDataset } from "./hooks"

export default function EditDataset() {
  const { TITLE, EDIT_TEXT } = useLanguage({
    TITLE: { en: "Edit Dataset", es: "Editar Dataset" },
    EDIT_TEXT: { en: "Edit Dataset", es: "Editar Dataset" },
  })

  const { datasetName, handleDatasetName, handleEditDataset } = useEditDataset()

  return (
    <div className='w-full'>
      <ModalTitle titleText={TITLE} />
      <DatasetForm datasetName={datasetName} handleDatasetName={handleDatasetName} />
      <ModalButtons handleNext={handleEditDataset} nextText={EDIT_TEXT} type='edit' />
    </div>
  )
}
