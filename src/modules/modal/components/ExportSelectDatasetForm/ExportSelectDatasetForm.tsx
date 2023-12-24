import { ExportForm, ModalContainer } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useConfig } from "@modules/config/hooks"
import { ModalExportSelectDataset } from "@modules/modal/interfaces"

export default function ExportSelectDatasetForm({
  handleCreateSelectDataset,
}: ModalExportSelectDataset) {
  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useTranslation({
    EXPORT_DATASET_TEXT: { en: "Export Single Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  const { config } = useConfig()

  function handleExport() {
    handleCreateSelectDataset({ config: config })
  }

  return (
    <ModalContainer
      title={EXPORT_DATASET_TEXT}
      handleNext={handleExport}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="export-select-dataset"
    >
      <ExportForm saveModelOption={true} />
    </ModalContainer>
  )
}
