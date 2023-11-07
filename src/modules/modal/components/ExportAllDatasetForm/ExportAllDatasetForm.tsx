import { ModalExportAllDatasets } from "@modules/modal/interfaces"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ExportForm, ModalContainer } from "../../shared/components"

export default function ExportAllDatasetForm({ handleCreateAllDatasets }: ModalExportAllDatasets) {
  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useLanguage({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  return (
    <ModalContainer
      title={EXPORT_ALL_DATASETS_TEXT}
      nextText={SUBMIT_TEXT}
      handleNext={handleCreateAllDatasets}
      type="edit"
      name="export-all-datasets"
    >
      <ExportForm saveModelOption={false} />
    </ModalContainer>
  )
}
