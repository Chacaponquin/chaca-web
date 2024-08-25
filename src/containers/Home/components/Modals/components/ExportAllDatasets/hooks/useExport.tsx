import { useToast } from "@modules/app/modules/toast/hooks"
import { Dataset } from "@modules/datasets/domain/core"
import { ExportDatasetValidator } from "@modules/datasets/domain/validators/export"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: ExportFileConfigDTO): void
}

export default function useExport({ handleExportDatasets }: Props) {
  const { handleCloseModal } = useModal()
  const { form, handleChangeFileType, handleChangeName } = useExportForm()
  const { toastChacaError } = useToast()
  const { datasets } = useDatasets()

  function handleExport() {
    const validator = new ExportDatasetValidator({ name: form.file.name })

    validator.execute({
      success() {
        handleExportDatasets(datasets, {
          arguments: form.file.arguments,
          name: form.file.name,
          type: form.file.type.fileType,
        })

        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleChangeFileType, handleChangeName, handleExport }
}
