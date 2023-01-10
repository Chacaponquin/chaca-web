import { useContext } from 'react'
import { DatasetsContext } from '../../../../shared/context/DatasetsContext'
import { MODAL_ACTIONS } from '../../constants/MODAL_ACTIONS'
import { ModalProps } from '../../interfaces/modal.interface'
import DatasetsHeader from './components/DatasetsHeader'
import ExportButton from './components/ExportButton'
import FieldContainer from './components/FieldContainer'
import NoFieldsMessage from './components/NoFieldsMessage'

const FieldsMenu = ({ handleOpenModal }: { handleOpenModal: (a: ModalProps) => void }) => {
  const { selectedDataset } = useContext(DatasetsContext)

  const handleExportAllDatasets = () => {
    handleOpenModal({ type: MODAL_ACTIONS.EXPORT_ALL_DATASETS })
  }

  return (
    <div className='h-screen min-w-[300px] max-w-[300px] bg-white border-2 flex flex-col justify-between'>
      <div className='flex flex-col w-full'>
        <DatasetsHeader handleOpenModal={handleOpenModal} />

        <div className='h-full bg-white w-full flex flex-col'>
          {selectedDataset && selectedDataset.fields.length > 0 ? (
            selectedDataset.fields.map((f) => (
              <FieldContainer key={f.id} margin={0} field={f} handleOpenModal={handleOpenModal} />
            ))
          ) : (
            <NoFieldsMessage handleOpenModal={handleOpenModal} />
          )}
        </div>
      </div>

      <ExportButton handleExportAllDatasets={handleExportAllDatasets} />
    </div>
  )
}

export default FieldsMenu
