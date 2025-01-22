import { useToast } from "@modules/app/modules/toast/hooks"
import { ExportDatasetValidator } from "@modules/dataset/domain/validators/export"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"
import { ExportFileConfigDTO } from "@modules/config/dto/file"
import { Schema } from "@modules/dataset/domain/core/schema"

interface Props {
  handleExportDataset(dataset: Schema[], config: ExportFileConfigDTO): void
  schema: Schema
}

export default function useExport({ handleExportDataset, schema }: Props) {
  const { form, handleChangeFileArguments, handleChangeFileType, handleChangeName } =
    useExportForm()
  const { handleCloseModal } = useModal()
  const { toastChacaError } = useToast()

  function handleExport() {
    const validator = new ExportDatasetValidator({ name: form.file.name })

    validator.execute({
      success() {
        handleExportDataset([schema], {
          arguments: form.file.arguments,
          name: form.file.name,
          type: form.file.type.type,
        })

        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleExport, handleChangeFileType, handleChangeName, handleChangeFileArguments }
}
