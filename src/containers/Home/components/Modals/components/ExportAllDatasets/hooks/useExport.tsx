import { useToast } from "@modules/app/modules/toast/hooks"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/dataset"
import { ExportDatasetValidator } from "@modules/datasets/domain/validators/export"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"

interface Props {
  handleExportDatasets(datasets: Dataset[], config: Config): void
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
        handleExportDatasets(datasets, form)
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleChangeFileType, handleChangeName, handleExport }
}
