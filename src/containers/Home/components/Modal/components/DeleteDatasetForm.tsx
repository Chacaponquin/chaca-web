import { useContext } from "react"
import { DatasetsContext } from "@shared/context/DatasetsContext"
import { useLanguage } from "@shared/hooks"
import { DATASETS_ACTIONS } from "@containers/Home/constants/ACTION_TYPES"
import { ModalButtons, ModalTitle } from "../shared/components"

const DeleteDatasetForm = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const { datasetDispatch, selectedDataset, handleSelectDataset, datasets } =
    useContext(DatasetsContext)

  const { DELETE_DATASET_TEXT, DELETE_DATASET_MESSAGE } = useLanguage({
    DELETE_DATASET_TEXT: { en: "Delete Dataset", es: "Borrar Dataset" },
    DELETE_DATASET_MESSAGE: {
      en: "Are you sure you want to delete the dataset",
      es: "Seguro que quieres eliminar el dataset",
    },
  })

  const handleDeleteDataset = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_DATASET,
      payload: { datasetID: selectedDataset.id },
    })

    handleSelectDataset(datasets[0].id)
    handleCloseModal()
  }

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle handleCloseModal={handleCloseModal} titleText={DELETE_DATASET_TEXT} />

      <div className='flex w-full flex-col'>
        <div className='mb-2 text-lg flex gap-1'>
          {DELETE_DATASET_MESSAGE} <h1 className='font-fontBold'>{selectedDataset.name}</h1>?
        </div>
      </div>

      <ModalButtons
        type='delete'
        nextText={DELETE_DATASET_TEXT}
        handleCancel={handleCloseModal}
        handleNext={handleDeleteDataset}
      />
    </div>
  )
}

export default DeleteDatasetForm
