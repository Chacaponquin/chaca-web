import { FileConfigOption } from "@modules/config/interfaces/config.iterface"
import { useState, useMemo, useEffect } from "react"
import { useConfig } from "../hooks"
import { FetchError } from "../modules/http/errors"
import { API_ROUTES } from "../constants/ROUTES"

export function appService() {
  const appInitFetch = () => {
    // language of the app
    const { axiosInstance } = useConfig()

    // user limits of documents

    // options for the fields

    // files config for exportation
    const [fileConfig, setFileConfig] = useState<FileConfigOption[]>([])

    // loading de la carga inicial de informacion
    const [initialFetchLoading, setInitialFetchLoading] = useState(true)

    const InitialFetchs = useMemo(() => {
      return {
        FILE_CONFIG: async () => {
          return (await axiosInstance.get<FileConfigOption[]>(API_ROUTES.GET_FILE_OPTIONS)).data
        },
      }
    }, [axiosInstance])

    useEffect(() => {
      Promise.all([InitialFetchs.FILE_CONFIG()])
        .then(([respFileConfig]) => {
          setFileConfig(respFileConfig)
        })
        .catch(() => {
          throw new FetchError()
        })
        .finally(() => {
          setInitialFetchLoading(false)
        })
    }, [])

    return { initialFetchLoading, fileConfig }
  }

  return { appInitFetch }
}
