import { ExportForm, ModalContainer } from "../../shared/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ModalExportSelectDataset } from "@modules/modal/interfaces/modal.interface"

const ExportSelectDatasetForm = ({ handleCreateSelectDataset }: ModalExportSelectDataset) => {
  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useLanguage({
    EXPORT_DATASET_TEXT: { en: "Export Single Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  return (
    <ModalContainer
      title={EXPORT_DATASET_TEXT}
      handleNext={handleCreateSelectDataset}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="export-select-dataset"
    >
      <ExportForm saveModelOption={true} />
    </ModalContainer>
  )
}

export default ExportSelectDatasetForm
