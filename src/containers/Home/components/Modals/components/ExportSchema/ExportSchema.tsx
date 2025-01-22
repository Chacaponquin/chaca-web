import { useTranslation } from "@modules/app/modules/language/hooks"
import { useExport } from "./hooks"
import { DatasetExportForm } from "../../shared/components"
import { Modal } from "@modules/modal/components"
import { Schema } from "@modules/dataset/domain/core/schema"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDataset(dataset: Schema[], config: ExportFileConfigDTO): void
  schema: Schema
}

export default function ExportSchema({ schema, handleExportDataset }: Props) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    schema: schema,
    handleExportDataset: handleExportDataset,
  })

  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useTranslation({
    EXPORT_DATASET_TEXT: { en: "Export Schema", es: "Exportar Schema" },
    SUBMIT_TEXT: { en: "Export", es: "Exportar" },
  })

  return (
    <Modal
      title={EXPORT_DATASET_TEXT}
      handleNext={handleExport}
      nextText={SUBMIT_TEXT}
      type="edit"
      name="export-select-dataset"
    >
      <DatasetExportForm
        saveModelOption={true}
        form={form}
        handleChangeFileType={handleChangeFileType}
        handleChangeName={handleChangeName}
      />
    </Modal>
  )
}
