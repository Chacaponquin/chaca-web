import { useLanguage } from "@shared/hooks"
import { ExportForm, ModalButtons, ModalTitle } from "../shared/components"

const ExportAllDatasetForm = ({
  handleCloseModal,
  handleCreateAllDatasets,
}: {
  handleCloseModal: () => void
  handleCreateAllDatasets: () => void
}) => {
  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useLanguage({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle handleCloseModal={handleCloseModal} titleText={EXPORT_ALL_DATASETS_TEXT} />

      <ExportForm />

      <ModalButtons
        nextText={SUBMIT_TEXT}
        handleCancel={handleCloseModal}
        handleNext={handleCreateAllDatasets}
        type='edit'
      />
    </div>
  )
}

export default ExportAllDatasetForm
