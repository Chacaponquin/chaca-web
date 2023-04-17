import { useContext, useMemo } from "react"
import ArgumentFilter from "@modules/shared/components/ArgumentFilter/ArgumentFilter"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import SaveModelForm from "../SaveModelForm/SaveModelForm"
import { ChacaSelect } from "@form/components"
import { DatasetsContext } from "@modules/datasets/context"
import { AppConfigContext } from "@modules/shared/modules/appConfig/context"
import { FILE_TYPE } from "@modules/config/constants"
import { configServices } from "@modules/config/services"

const ExportForm = ({ saveModelOption }: { saveModelOption: boolean }) => {
  const { config } = useContext(DatasetsContext)
  const { fileConfig } = useContext(AppConfigContext)
  const { changeFileArgument, changeFileType } = configServices()

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

  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-4'>
        <label htmlFor='' className='font-fontBold text-lg'>
          {FORMAT_TEXT}:
        </label>
        <ChacaSelect
          options={fileConfig}
          labelKey={"fileType"}
          valueKey={"fileType"}
          placeholder={"Select a file format"}
          onChange={(value) => {
            handleChangeFileType(value as FILE_TYPE)
          }}
          value={config.file.fileType}
        />
      </div>

      {(fileArguments.length || saveModelOption) && (
        <div className='flex flex-col mt-2 gap-2'>
          {fileArguments.map((a, i) => (
            <div className='flex items-center justify-between gap-2' key={i}>
              <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
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

export default ExportForm
