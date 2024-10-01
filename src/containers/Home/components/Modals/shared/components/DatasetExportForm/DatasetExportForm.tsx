import { useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect, ChacaTextInput } from "@form/components"
import { useConfig } from "@modules/config/hooks"
import { ExportDatasetForm } from "../../domain/export-dataset"
import { FileConfigOption } from "@modules/config/domain/core"
import { FormSection } from "../../shared/components"

interface Props {
  saveModelOption: boolean
  form: ExportDatasetForm
  handleChangeFileType(f: FileConfigOption): void
  handleChangeName(n: string): void
}

export default function DatasetExportForm({ form, handleChangeFileType, handleChangeName }: Props) {
  const { fileOptions } = useConfig()

  const { FORMAT_TEXT, SELECT_FORMAT, NAME, NAME_PLACEHOLDER } = useTranslation({
    FORMAT_TEXT: { en: "Format", es: "Formato" },
    SELECT_FORMAT: { en: "Select a file format", es: "Selecciona el formato" },
    NAME: { en: "Filename", es: "Nombre del archivo" },
    NAME_PLACEHOLDER: { en: "Name", es: "Nombre" },
  })

  return (
    <div className="flex flex-col gap-y-3">
      <FormSection vertical={true} labelText={NAME}>
        <ChacaTextInput
          name="file-name"
          value={form.file.name}
          onChange={handleChangeName}
          size="base"
          disabled={false}
          type="text"
          placeholder={NAME_PLACEHOLDER}
          autoFocus={true}
        />
      </FormSection>

      <FormSection vertical={true} labelText={FORMAT_TEXT}>
        <ChacaSelect
          options={fileOptions}
          label={(f) => f.title}
          placeholder={SELECT_FORMAT}
          onChange={(v) => handleChangeFileType(v)}
          value={(f) => f === form.file.type}
          size="base"
        />
      </FormSection>
    </div>
  )
}
