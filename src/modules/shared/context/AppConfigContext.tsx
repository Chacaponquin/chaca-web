/*eslint-disable */

import { createContext, ReactElement, useEffect, useState, useMemo } from "react"
import { InitialFetchError } from "../errors"
import { useConfig } from "../hooks"
import { FileConfigOption, NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { Languages } from "../interfaces/language.interface"
import { Schema } from "@modules/schemas/interfaces/schema.interface"
import { API_ROUTES } from "../routes"

const AppConfigContext = createContext<{
  noUserLimits: NoUserLimits
  schemas: Schema[]
  initialFetchLoading: boolean
  fileConfig: FileConfigOption[]
  language: Languages
}>({
  noUserLimits: {} as any,
  initialFetchLoading: true,
  schemas: [],
  fileConfig: [],
  language: "en",
})

const AppConfigProvider = ({ children = <></> }: { children: ReactElement }) => {
  // user limits of documents
  const [noUserLimits, setNoUserLimits] = useState<NoUserLimits>({
    LIMIT_DATASETS: 3,
    LIMIT_DOCUMENTS: 500,
  })

  // language of the app
  const [language, setLanguage] = useState<Languages>("en")

  // options for the fields
  const [schemas, setSchemas] = useState<Schema[]>([])

  // files config for exportation
  const [fileConfig, setFileConfig] = useState<FileConfigOption[]>([])

  // loading de la carga inicial de informacion
  const [initialFetchLoading, setInitialFetchLoading] = useState(true)

  // language of the app
  const { axiosInstance } = useConfig()

  const InitialFetchs = useMemo(() => {
    return {
      NO_USER_LIMITS: async () => {
        return (await axiosInstance.get<NoUserLimits>(API_ROUTES.GET_NO_USER_LIMITS)).data
      },
      FILE_CONFIG: async () => {
        return (await axiosInstance.get<FileConfigOption[]>(API_ROUTES.GET_FILE_OPTIONS)).data
      },
      API_OPTIONS: async () => {
        return (await axiosInstance.get<Schema[]>(API_ROUTES.GET_API_OPTIONS)).data
      },
    }
  }, [])

  useEffect(() => {
    const navigatorLanguage = window.navigator.language
    if (navigatorLanguage.includes("en")) {
      setLanguage("en")
    } else if (navigatorLanguage.includes("es")) {
      setLanguage("es")
    } else {
      setLanguage("en")
    }
  }, [])

  useEffect(() => {
    Promise.all([
      InitialFetchs.NO_USER_LIMITS(),
      InitialFetchs.FILE_CONFIG(),
      InitialFetchs.API_OPTIONS(),
    ])
      .then(([userLimits, respFileConfig, schemas]) => {
        setNoUserLimits(userLimits)
        setFileConfig(respFileConfig)
        setSchemas(schemas)
      })
      .catch(() => {
        throw new InitialFetchError()
      })
      .finally(() => setInitialFetchLoading(false))
  }, [])

  const data = {
    initialFetchLoading,
    schemas,
    fileConfig,
    noUserLimits,
    language,
  }

  return <AppConfigContext.Provider value={data}>{children}</AppConfigContext.Provider>
}

export { AppConfigContext, AppConfigProvider }
