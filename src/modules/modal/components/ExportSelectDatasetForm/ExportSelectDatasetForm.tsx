import { ExportForm, ModalContainer } from "../../shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useModal } from "@modules/modal/hooks"
import { ModalExportSelectDataset } from "@modules/modal/interfaces"
import { useExportForm } from "@modules/modal/shared/hooks"

export default function ExportSelectDatasetForm({
  handleCreateSelectDataset,
}: ModalExportSelectDataset) {
  const { handleCloseModal } = useModal()
  const { form, handleChangeFileType } = useExportForm()

  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useTranslation({
    EXPORT_DATASET_TEXT: { en: "Export Single Dataset", es: "Exportar Dataset" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  function handleExport() {
    handleCreateSelectDataset({ config: form })
    handleCloseModal()
  }

  return (
    <ModalContainer
      title={EXPORT_DATASET_TEXT}
      handleNext={handleExport}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="export-select-dataset"
    >
      <ExportForm saveModelOption={true} form={form} handleChangeFileType={handleChangeFileType} />
    </ModalContainer>
  )
}
