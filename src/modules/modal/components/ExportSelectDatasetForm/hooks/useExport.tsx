import { Validator } from "@modules/app/domain"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { FileNameValidator } from "@modules/config/domain/validators"
import { EmptyFilenameError } from "@modules/config/exceptions"
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
        handleCreateSelectDataset({ config: form })
        handleCloseModal()
      },
      error(error) {
        if (error instanceof EmptyFilenameError) {
          toastError({ id: "empty-filename", message: EMPTY_NAME })
        }
      },
    })
  }

  return { form, handleExport, handleChangeFileType, handleChangeName, handleChangeFileArguments }
}
