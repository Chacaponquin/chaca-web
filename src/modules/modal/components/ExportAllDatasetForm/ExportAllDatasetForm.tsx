import { ModalExportAllDatasets } from "@modules/modal/interfaces"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ExportForm, ModalContainer } from "../../shared/components"
import { useConfig } from "@modules/config/hooks"

export default function ExportAllDatasetForm({ handleCreateAllDatasets }: ModalExportAllDatasets) {
  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useTranslation({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  const { config } = useConfig()

  function handleExport() {
    handleCreateAllDatasets({ config: config })
  }

  return (
    <ModalContainer
      title={EXPORT_ALL_DATASETS_TEXT}
      nextText={SUBMIT_TEXT}
      handleNext={handleExport}
      type="edit"
      name="export-all-datasets"
    >
      <ExportForm saveModelOption={false} />
    </ModalContainer>
  )
}
