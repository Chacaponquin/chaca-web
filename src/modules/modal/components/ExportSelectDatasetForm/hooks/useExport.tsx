import { Validator } from "@modules/app/domain"
import { useToast } from "@modules/app/modules/toast/hooks"
import { FileNameValidator } from "@modules/config/domain/validators"
import { Config } from "@modules/config/interfaces"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@modules/modal/shared/hooks"

interface Props {
  handleCreateSelectDataset(props: { config: Config }): void
}

export default function useExport({ handleCreateSelectDataset }: Props) {
  const { form, handleChangeFileArguments, handleChangeFileType, handleChangeName } =
    useExportForm()
  const { handleCloseModal } = useModal()
  const { toastChacaError } = useToast()

  function handleExport() {
    const validator = new Validator([new FileNameValidator({ name: form.file.name })])

    validator.execute({
      success() {
        handleCreateSelectDataset({ config: form })
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleExport, handleChangeFileType, handleChangeName, handleChangeFileArguments }
}
