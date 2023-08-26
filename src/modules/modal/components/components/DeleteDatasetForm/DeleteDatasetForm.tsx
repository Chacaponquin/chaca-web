import { useLanguage } from "@modules/app/modules/language/hooks"
import { DeleteForm, ModalButtons, ModalTitle } from "../../shared/components"
import { useDeleteDatasetForm } from "./hooks"

const DeleteDatasetForm = ({ datasetName }: { datasetName: string }) => {
  const { handleDeleteDataset } = useDeleteDatasetForm()

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useLanguage({
    DELETE_DATASET_TEXT: { en: "Delete Dataset", es: "Borrar Dataset" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the dataset",
      es: "Seguro que quieres eliminar el dataset",
    },
  })

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText={DELETE_DATASET_TEXT} />
      <DeleteForm message={DELETE_DATASET_MESSAGE} elementName={datasetName} />
      <ModalButtons type="delete" nextText={DELETE_DATASET_TEXT} handleNext={handleDeleteDataset} />
    </div>
  )
}

export default DeleteDatasetForm
