import { useLanguage } from "@modules/shared/hooks"
import { ExportForm, ModalButtons, ModalTitle } from "../../shared/components"

const ExportAllDatasetForm = ({
  handleCreateAllDatasets,
}: {
  handleCreateAllDatasets: () => void
}) => {
  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useLanguage({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  return (
    <div className='flex flex-col w-full'>
      <ModalTitle titleText={EXPORT_ALL_DATASETS_TEXT} />
      <ExportForm saveModelOption={false} />
      <ModalButtons nextText={SUBMIT_TEXT} handleNext={handleCreateAllDatasets} type='edit' />
    </div>
  )
}

export default ExportAllDatasetForm
