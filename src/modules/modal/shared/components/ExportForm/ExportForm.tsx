import { useId, Fragment } from "react"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSelect } from "@form/components"
import { useConfig } from "@modules/config/hooks"
import { FormInputSection } from "../../shared/components"

export default function ExportForm({ saveModelOption }: { saveModelOption: boolean }) {
  const { config, fileConfig, handleChangeFileType: handleChangeFileTypeService } = useConfig()

  function handleChangeFileType(fileType: string) {
    handleChangeFileTypeService(fileType)
  }

  const { FORMAT_TEXT, SELECT_FORMAT } = useLanguage({
    FORMAT_TEXT: { en: "Format", es: "Formato" },
    SELECT_FORMAT: { en: "Select a file format", es: "Selecciona el formato" },
  })

  const formatId = useId()

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection labelText={FORMAT_TEXT} id={formatId}>
        <ChacaSelect
          options={fileConfig}
          labelKey={"title"}
          valueKey={"id"}
          placeholder={SELECT_FORMAT}
          onChange={(value) => handleChangeFileType(value)}
          value={config.file.fileType}
          dimension="large"
          id={formatId}
        />
      </FormInputSection>

      {saveModelOption && <Fragment></Fragment>}
    </div>
  )
}
