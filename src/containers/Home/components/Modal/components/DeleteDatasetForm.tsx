import { useContext } from 'react'
import { DatasetsContext } from '../../../../../shared/context/DatasetsContext'
import { DATASETS_ACTIONS } from '../../../constants/ACTION_TYPES'
import ModalButtons from '../shared/components/ModalButtons'
import ModalTitle from '../shared/components/ModalTitle'

const DeleteDatasetForm = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const { datasetDispatch, selectedDataset, handleSelectDataset, datasets } =
    useContext(DatasetsContext)

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
      <ModalTitle handleCloseModal={handleCloseModal} titleText='Delete Dataset' />

      <div className='flex w-full flex-col'>
        <div className='mb-2 text-lg flex gap-1'>
          Seguro que quieres eliminar el dataset{' '}
          <h1 className='font-fontBold'>{selectedDataset.name}</h1>?
        </div>
      </div>

      <ModalButtons
        type='delete'
        nextText='Delete Dataset'
        handleCancel={handleCloseModal}
        handleNext={handleDeleteDataset}
      />
    </div>
  )
}

export default DeleteDatasetForm
