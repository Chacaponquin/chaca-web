import { useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect, ChacaTextInput } from "@form/components"
import { useConfig } from "@modules/config/hooks"
import { Config } from "@modules/config/interfaces"
import { FormSection } from "@modules/modal/components"

interface Props {
  saveModelOption: boolean
  form: Config
  handleChangeFileType(f: string): void
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
          labelKey="title"
          valueKey="id"
          placeholder={SELECT_FORMAT}
          onChange={handleChangeFileType}
          value={form.file.type}
          size="base"
        />
      </FormSection>
    </div>
  )
}
