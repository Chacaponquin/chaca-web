import { useTranslation } from "@modules/app/modules/language/hooks"
import { useExport } from "./hooks"
import { DatasetExportForm } from "../../shared/components"
import { Modal } from "@modules/modal/components"
import { Dataset } from "@modules/datasets/domain/core"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: ExportFileConfigDTO): void
}

export default function ExportAllDatasets({ handleExportDatasets }: Props) {
  const { form, handleChangeFileType, handleChangeName, handleExport } = useExport({
    handleExportDatasets: handleExportDatasets,
  })

  const { EXPORT_ALL_DATASETS_TEXT, SUBMIT_TEXT } = useTranslation({
    SUBMIT_TEXT: { en: "Export Datasets", es: "Exportar Datasets" },
    EXPORT_ALL_DATASETS_TEXT: { en: "Export All Datasets", es: "Exportar todos los datasets" },
  })

  return (
    <Modal
      title={EXPORT_ALL_DATASETS_TEXT}
      nextText={SUBMIT_TEXT}
      handleNext={handleExport}
      type="edit"
      name="export-all-datasets"
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
