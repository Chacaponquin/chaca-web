import { useToast } from "@modules/app/modules/toast/hooks"
import { Dataset } from "@modules/datasets/domain/core"
import { ExportDatasetValidator } from "@modules/datasets/domain/validators/export"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: ExportFileConfigDTO): void
  dataset: Dataset
}

export default function useExport({ handleExportDatasets, dataset }: Props) {
  const { form, handleChangeFileArguments, handleChangeFileType, handleChangeName } =
    useExportForm()
  const { handleCloseModal } = useModal()
  const { toastChacaError } = useToast()

  function handleExport() {
    const validator = new ExportDatasetValidator({ name: form.file.name })

    validator.execute({
      success() {
        handleExportDatasets([dataset], {
          arguments: form.file.arguments,
          name: form.file.name,
          type: form.file.type.fileType,
        })
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleExport, handleChangeFileType, handleChangeName, handleChangeFileArguments }
}
