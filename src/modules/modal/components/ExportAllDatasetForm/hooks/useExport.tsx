import { Validator } from "@modules/app/domain"
import { useToast } from "@modules/app/modules/toast/hooks"
import { FileNameValidator } from "@modules/config/domain/validators"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/dataset"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@modules/modal/shared/hooks"

interface Props {
  handleCreateAllDatasets(props: { config: Config; datasets: Dataset[] }): void
}

export default function useExport({ handleCreateAllDatasets }: Props) {
  const { handleCloseModal } = useModal()
  const { datasets } = useDatasets()
  const { form, handleChangeFileType, handleChangeName } = useExportForm()
  const { toastChacaError } = useToast()

  function handleExport() {
    const validator = new Validator([new FileNameValidator({ name: form.file.name })])

    validator.execute({
      success() {
        handleCreateAllDatasets({ config: form, datasets: datasets })
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleChangeFileType, handleChangeName, handleExport }
}
