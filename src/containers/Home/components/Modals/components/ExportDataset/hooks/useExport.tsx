import { useToast } from "@modules/app/modules/toast/hooks"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/dataset"
import { ExportDatasetValidator } from "@modules/datasets/domain/validators/export"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: Config): void
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
        handleExportDatasets([dataset], form)
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleExport, handleChangeFileType, handleChangeName, handleChangeFileArguments }
}
