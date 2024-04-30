import { ExportForm, ModalContainer } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ModalExportSelectDataset } from "@modules/modal/interfaces"
import { useExport } from "./hooks"

export default function ExportSelectDatasetForm({
  handleCreateSelectDataset,
}: ModalExportSelectDataset) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    handleCreateSelectDataset,
  })

  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useTranslation({
    EXPORT_DATASET_TEXT: { en: "Export Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  return (
    <ModalContainer
      title={EXPORT_DATASET_TEXT}
      handleNext={handleExport}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="export-select-dataset"
    >
      <ExportForm
        saveModelOption={true}
        form={form}
        handleChangeFileType={handleChangeFileType}
        handleChangeName={handleChangeName}
      />
    </ModalContainer>
  )
}
