import ModalButtons from "../shared/components/ModalButtons"
import ModalTitle from "../shared/components/ModalTitle"
import ExportForm from "../shared/components/ExportForm"

const ExportSelectDatasetForm = ({
  handleCloseModal,
  handleCreateSelectDataset,
}: {
  handleCloseModal: () => void
  handleCreateSelectDataset: () => void
}) => {
  return (
    <div className='flex flex-col w-full'>
      <ModalTitle handleCloseModal={handleCloseModal} titleText='Export Dataset' />

      <ExportForm />

      <ModalButtons
        handleCancel={handleCloseModal}
        handleNext={handleCreateSelectDataset}
        nextText='Export'
        type='edit'
      />
    </div>
  )
}

export default ExportSelectDatasetForm
