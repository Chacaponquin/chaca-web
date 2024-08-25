import { useTranslation } from "@modules/app/modules/language/hooks"
import { useExport } from "./hooks"
import { DatasetExportForm } from "../../shared/components"
import { Modal } from "@modules/modal/components"
import { Dataset } from "@modules/datasets/domain/core"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: ExportFileConfigDTO): void
  dataset: Dataset
}

export default function ExportDataset({ dataset, handleExportDatasets }: Props) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    dataset: dataset,
    handleExportDatasets: handleExportDatasets,
  })

  const { EXPORT_DATASET_TEXT, SUBMIT_TEXT } = useTranslation({
    EXPORT_DATASET_TEXT: { en: "Export Dataset", es: "Exportar Dataset" },
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
