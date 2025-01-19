import { useTranslation } from "@modules/app/modules/language/hooks"
import { useExport } from "./hooks"
import { DatasetExportForm } from "../../shared/components"
import { Modal } from "@modules/modal/components"
import { Schema } from "@modules/dataset/domain/core"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDataset(dataset: Schema[], config: ExportFileConfigDTO): void
}

export default function ExportDataset({ handleExportDataset }: Props) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    handleExportDataset: handleExportDataset,
  })

  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useTranslation({
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export Dataset", es: "Exportar Dataset" },
  })

  return (
    <Modal
      title={EXPORT_ALL_DATASETS_TEXT}
      nextText={SUBMIT_TEXT}
      handleNext={handleExport}
      type="edit"
      name="export-all-dataset"
    >
      <DatasetExportForm
        saveModelOption={false}
        handleChangeFileType={handleChangeFileType}
        form={form}
        handleChangeName={handleChangeName}
      />
    </Modal>
  )
}
