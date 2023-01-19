import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { useLanguage } from "@shared/hooks"
import { ModalButtons, ModalTitle } from "../../shared/components"
import { useDeleteDatasetForm } from "./hooks"

const DeleteDatasetForm = () => {
  const { selectedDataset } = useContext(DatasetsContext)

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useLanguage({
    DELETE_DATASET_TEXT: { en: "Delete Dataset", es: "Borrar Dataset" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the dataset",
      es: "Seguro que quieres eliminar el dataset",
    },
  })

  const { handleDeleteDataset } = useDeleteDatasetForm()

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={DELETE_DATASET_TEXT} />

      <div className='flex w-full flex-col'>
        <div className='mb-2 text-lg flex gap-1'>
          {DELETE_DATASET_MESSAGE} <h1 className='font-fontBold'>{selectedDataset.name}</h1>?
        </div>
      </div>

      <ModalButtons type='delete' nextText={DELETE_DATASET_TEXT} handleNext={handleDeleteDataset} />
    </div>
  )
}

export default DeleteDatasetForm
