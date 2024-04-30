import { ModalExportAllDatasets } from "@modules/modal/interfaces"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ExportForm, ModalContainer } from "../../shared/components"
import { useExport } from "./hooks"

export default function ExportAllDatasetForm({ handleCreateAllDatasets }: ModalExportAllDatasets) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    handleCreateAllDatasets,
  })

  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useTranslation({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  return (
    <ModalContainer
      title={EXPORT_ALL_DATASETS_TEXT}
      nextText={SUBMIT_TEXT}
      handleNext={handleExport}
      type="edit"
      name="export-all-datasets"
    >
      <ExportForm
        saveModelOption={false}
        handleChangeFileType={handleChangeFileType}
        form={form}
        handleChangeName={handleChangeName}
      />
    </ModalContainer>
  )
}
