import ModalButtons from "../shared/components/ModalButtons"
import ModalTitle from "../shared/components/ModalTitle"
import ExportForm from "../shared/components/ExportForm"
import { useLanguage } from "../../../../../shared/hooks"

const ExportSelectDatasetForm = ({
  handleCloseModal,
  handleCreateSelectDataset,
}: {
  handleCloseModal: () => void
  handleCreateSelectDataset: () => void
}) => {
  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useLanguage({
    EXPORT_DATASET_TEXT: { en: "Export Single Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle handleCloseModal={handleCloseModal} titleText={EXPORT_DATASET_TEXT} />

      <ExportForm />

      <ModalButtons
        handleCancel={handleCloseModal}
        handleNext={handleCreateSelectDataset}
        nextText={SUBMIT_TEXT}
        type='edit'
      />
    </div>
  )
}

export default ExportSelectDatasetForm
