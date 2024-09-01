import { useToast } from "@modules/app/modules/toast/hooks"
import { Schema } from "@modules/dataset/domain/core"
import { ExportDatasetValidator } from "@modules/dataset/domain/validators/export"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useExportForm } from "@containers/Home/components/Modals/shared/hooks"
import { ExportFileConfigDTO } from "@modules/config/dto/file"

interface Props {
  handleExportDataset(dataset: Schema[], config: ExportFileConfigDTO): void
}

export default function useExport({ handleExportDataset }: Props) {
  const { handleCloseModal } = useModal()
  const { form, handleChangeFileType, handleChangeName } = useExportForm()
  const { toastChacaError } = useToast()
  const { dataset } = useDataset()

  function handleExport() {
    const validator = new ExportDatasetValidator({ name: form.file.name })

    validator.execute({
      success() {
        handleExportDataset(dataset, {
          arguments: form.file.arguments,
          name: form.file.name,
          type: form.file.type.type,
        })

        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { form, handleChangeFileType, handleChangeName, handleExport }
}
