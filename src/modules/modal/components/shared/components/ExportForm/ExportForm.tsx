import { useMemo, useId } from "react"
import { ArgumentFilter } from "@modules/schemas/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import SaveModelForm from "../SaveModelForm/SaveModelForm"
import { ChacaSelect } from "@form/components"
import { FILE_TYPE } from "@modules/config/constants"
import { useConfigServices } from "@modules/config/services"
import { FormInputSection } from "../../shared/components"

export default function ExportForm({ saveModelOption }: { saveModelOption: boolean }) {
  const { config, fileConfig } = useConfigServices()
  const { changeFileArgument, changeFileType } = useConfigServices()

  const handleChangeFileArgument = (argument: string, value: unknown) => {
    changeFileArgument(argument, value)
  }

  const handleChangeFileType = (fileType: FILE_TYPE) => {
    changeFileType(fileType)
  }

  const fileArguments = useMemo(() => {
    const fileFound = fileConfig.find((el) => el.fileType === config.file.fileType)

    if (fileFound) return fileFound.arguments
    else return []
  }, [fileConfig, config.file.fileType])

  const { FORMAT_TEXT } = useLanguage({
    FORMAT_TEXT: { en: "Format", es: "Formato" },
  })

  const formatId = useId()

  return (
    <div className="flex flex-col gap-y-3">
      <FormInputSection labelText={FORMAT_TEXT} id={formatId}>
        <ChacaSelect
          options={fileConfig}
          labelKey={"fileType"}
          valueKey={"fileType"}
          placeholder={"Select a file format"}
          onChange={(value) => {
            handleChangeFileType(value as FILE_TYPE)
          }}
          value={config.file.fileType}
          dimension="large"
        />
      </FormInputSection>

      {(fileArguments.length || saveModelOption) && (
        <div className="flex flex-col gap-2">
          {fileArguments.map((a, i) => (
            <div className="flex items-center justify-between gap-2" key={i}>
              <label htmlFor="" className="font-fontBold text-lg whitespace-nowrap">
                {a.argument}:
              </label>
              <ArgumentFilter
                arg={a}
                handleChangeArgumentValue={(v) => handleChangeFileArgument(a.argument, v)}
                value={config.file.arguments[a.argument]}
              />
            </div>
          ))}

          {saveModelOption && <SaveModelForm />}
        </div>
      )}
    </div>
  )
}
