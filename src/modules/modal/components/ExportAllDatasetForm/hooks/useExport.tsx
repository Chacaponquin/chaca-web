import { Validator } from "@modules/app/domain"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { FileNameValidator } from "@modules/config/domain/validators"
import { EmptyFilenameError } from "@modules/config/exceptions"
import { Config } from "@modules/config/interfaces"
import { Dataset } from "@modules/datasets/domain/tree"
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
  const { toastError } = useToast()

  const { EMPTY_NAME } = useTranslation({
    EMPTY_NAME: {
      en: "You must insert a name for the file",
      es: "Debes insertar un nombre para el archivo",
    },
  })

  function handleExport() {
    const validator = new Validator([new FileNameValidator({ name: form.file.name })])

    validator.execute({
      success() {
        handleCreateAllDatasets({ config: form, datasets: datasets })
        handleCloseModal()
      },
      error(error) {
        if (error instanceof EmptyFilenameError) {
          toastError({ id: "empty-filename", message: EMPTY_NAME })
        }
      },
    })
  }

  return { form, handleChangeFileType, handleChangeName, handleExport }
}
