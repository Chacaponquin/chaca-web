import { Dispatch, createContext, useReducer, useState } from "react"
import { Config, FileConfigOption } from "../interfaces/config.iterface"
import { useQuery } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { FILE_TYPE } from "../constants"
import { configReducer } from "../reducer"
import { ConfigPayload } from "../reducer/config_reducer"
import { useErrorBoundary } from "react-error-boundary"

interface ConfigContextProps {
  fileConfig: Array<FileConfigOption>
  config: Config
  configDispatch: Dispatch<ConfigPayload>
}

const ConfigContext = createContext<ConfigContextProps>({} as ConfigContextProps)

const ConfigProvider = ({ children }: { children: React.ReactElement }) => {
  const [fileConfig, setFileConfig] = useState<FileConfigOption[]>([])
  const { showBoundary } = useErrorBoundary()

  const [config, configDispatch] = useReducer(configReducer, {
    file: { fileType: FILE_TYPE.JSON, arguments: {} },
    saveSchema: null,
  })

  useQuery<Array<FileConfigOption>>({
    url: API_ROUTES.GET_FILE_OPTIONS,
    onCompleted: (data) => {
      setFileConfig(data)
    },
    onError: (error) => {
      showBoundary(error)
    },
  })

  const data: ConfigContextProps = { fileConfig, config, configDispatch }

  return <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
}

export { ConfigContext, ConfigProvider }
