import { useId, Fragment } from "react"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { ChacaSelect } from "@form/components"
import { FILE_TYPE } from "@modules/config/constants"
import { useConfig } from "@modules/config/hooks"
import { FormInputSection } from "../../shared/components"

export default function ExportForm({ saveModelOption }: { saveModelOption: boolean }) {
  const { config, fileConfig, handleChangeFileType: handleChangeFileTypeService } = useConfig()

  const handleChangeFileType = (fileType: FILE_TYPE) => {
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
          valueKey={"fileType"}
          placeholder={SELECT_FORMAT}
          onChange={(value) => handleChangeFileType(value)}
          value={config.file.fileType}
          dimension="large"
        />
      </FormInputSection>

      {saveModelOption && <Fragment></Fragment>}
    </div>
  )
}
