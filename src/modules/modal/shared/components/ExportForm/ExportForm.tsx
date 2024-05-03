import { Fragment } from "react"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect, ChacaTextInput } from "@form/components"
import { FormInputSection } from "../../shared/components"
import { useConfig } from "@modules/config/hooks"
import { Config } from "@modules/config/interfaces"

interface Props {
  saveModelOption: boolean
  form: Config
  handleChangeFileType(f: string): void
  handleChangeName(n: string): void
}

export default function ExportForm({
  saveModelOption,
  form,
  handleChangeFileType,
  handleChangeName,
}: Props) {
  const { fileOptions } = useConfig()

  const { FORMAT_TEXT, SELECT_FORMAT, NAME } = useTranslation({
    FORMAT_TEXT: { en: "Format", es: "Formato" },
    SELECT_FORMAT: { en: "Select a file format", es: "Selecciona el formato" },
    NAME: { en: "File name", es: "Nombre del archivo" },
  })

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection vertical={true} labelText={NAME}>
        <ChacaTextInput
          name="file-name"
          value={form.file.name}
          onChange={handleChangeName}
          size="base"
          disabled={false}
          type="text"
          placeholder="Nombre"
        />
      </FormInputSection>

      <FormInputSection vertical={true} labelText={FORMAT_TEXT}>
        <ChacaSelect
          options={fileOptions}
          labelKey="title"
          valueKey="id"
          placeholder={SELECT_FORMAT}
          onChange={handleChangeFileType}
          value={form.file.type}
          size="base"
        />
      </FormInputSection>

      {saveModelOption && <Fragment></Fragment>}
    </div>
  )
}
