import { useId, Fragment } from "react"
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

  const formatId = useId()
  const nameId = useId()

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection labelText={NAME} id={nameId}>
        <ChacaTextInput
          name="file-name"
          value={form.file.name}
          onChange={handleChangeName}
          size="lg"
          disabled={false}
          type="text"
          placeholder="Nombre"
        />
      </FormInputSection>

      <FormInputSection labelText={FORMAT_TEXT} id={formatId}>
        <ChacaSelect
          options={fileOptions}
          labelKey="title"
          valueKey="id"
          placeholder={SELECT_FORMAT}
          onChange={handleChangeFileType}
          value={form.file.type}
          size="lg"
          id={formatId}
        />
      </FormInputSection>

      {saveModelOption && <Fragment></Fragment>}
    </div>
  )
}
