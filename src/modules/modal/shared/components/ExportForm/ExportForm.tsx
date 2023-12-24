import { useId, Fragment } from "react"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect } from "@form/components"
import { useConfig } from "@modules/config/hooks"
import { FormInputSection } from "../../shared/components"

interface Props {
  saveModelOption: boolean
}

export default function ExportForm({ saveModelOption }: Props) {
  const { config, fileOptions, handleChangeFileType: handleChangeFileTypeService } = useConfig()

  function handleChangeFileType(fileId: string) {
    handleChangeFileTypeService(fileId)
  }

  const { FORMAT_TEXT, SELECT_FORMAT } = useTranslation({
    FORMAT_TEXT: { en: "Format", es: "Formato" },
    SELECT_FORMAT: { en: "Select a file format", es: "Selecciona el formato" },
  })

  const formatId = useId()

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection labelText={FORMAT_TEXT} id={formatId}>
        <ChacaSelect
          options={fileOptions}
          labelKey={"title"}
          valueKey={"id"}
          placeholder={SELECT_FORMAT}
          onChange={handleChangeFileType}
          value={config.file.fileType}
          dimension="large"
          id={formatId}
        />
      </FormInputSection>

      {saveModelOption && <Fragment></Fragment>}
    </div>
  )
}
