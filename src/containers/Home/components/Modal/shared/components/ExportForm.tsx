import { Dropdown } from 'primereact/dropdown'
import { InputSwitch } from 'primereact/inputswitch'
import { useContext, useMemo } from 'react'
import { Private } from '../../../../../../shared/assets/icons'
import ArgumentFilter from '../../../../../../shared/components/ArgumentFilter/ArgumentFilter'
import { FILE_TYPE } from '../../../../../../shared/constant/FILE_TYPE'
import { AppConfigContext } from '../../../../../../shared/context/AppConfigContext'
import { DatasetsContext } from '../../../../../../shared/context/DatasetsContext'
import { UserContext } from '../../../../../../shared/context/UserContext'
import { DataTransform } from '../../../../../../shared/helpers/DataTransform'
import { CONFIG_ACTIONS } from '../../../../constants/ACTION_TYPES'

const ExportForm = () => {
  const { actualUser } = useContext(UserContext)
  const { configDispatch, config } = useContext(DatasetsContext)
  const { fileConfig } = useContext(AppConfigContext)

  const handleChangeFileArgument = (argument: string, value: any) => {
    configDispatch({
      type: CONFIG_ACTIONS.CHANGE_FILE_ARGUMENTS,
      payload: { field: argument, value },
    })
  }

  const fileArguments = useMemo(() => {
    const fileFound = fileConfig.find((el) => el.fileType === config.file.fileType)

    if (fileFound) return fileFound.arguments
    else return []
  }, [fileConfig, config.file.fileType])

  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <label htmlFor='' className='font-fontBold text-lg'>
          Format:
        </label>
        <Dropdown
          options={fileConfig.map((f) => f.fileType)}
          value={config.file.fileType}
          onChange={(e) => {
            configDispatch({
              type: CONFIG_ACTIONS.CHANGE_FILE_TYPE,
              payload: {
                value: e.value as FILE_TYPE,
              },
            })
          }}
        />
      </div>

      <div className='flex flex-col mt-2 gap-2'>
        {fileArguments.map((a, i) => (
          <div className='flex items-center justify-between gap-2' key={i}>
            <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
              {DataTransform.titlePipe(a.argument)}:
            </label>
            <ArgumentFilter
              arg={a}
              handleChangeArgumentValue={(v) => handleChangeFileArgument(a.argument, v)}
              value={config.file.arguments[a.argument]}
            />
          </div>
        ))}

        <div className='flex items-center gap-2 justify-between'>
          <label htmlFor='' className='font-fontBold text-lg'>
            Save Schema:
          </label>
          {actualUser ? (
            <InputSwitch
              checked={config.saveSchema}
              onChange={(e) => {
                configDispatch({
                  type: CONFIG_ACTIONS.CHANGE_SAVE_SCHEMA,
                  payload: { value: e.value },
                })
              }}
            />
          ) : (
            <Private size={23} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ExportForm
