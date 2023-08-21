import { FileConfigOption, NoUserLimits } from "@modules/config/interfaces/config.iterface"
import { useState, useMemo, useEffect } from "react"
import { Schema } from "../../schemas/interfaces/schema.interface"
import { useConfig } from "../hooks"
import { FetchError } from "../modules/http/errors"
import { API_ROUTES } from "../constants/ROUTES"

export function appService() {
  const appInitFetch = () => {
    // language of the app
    const { axiosInstance } = useConfig()

    // user limits of documents
    const [noUserLimits, setNoUserLimits] = useState<NoUserLimits>({
      LIMIT_DATASETS: 3,
      LIMIT_DOCUMENTS: 500,
    })

    // options for the fields
    const [schemas, setSchemas] = useState<Schema[]>([])

    // files config for exportation
    const [fileConfig, setFileConfig] = useState<FileConfigOption[]>([])

    // loading de la carga inicial de informacion
    const [initialFetchLoading, setInitialFetchLoading] = useState(true)

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
    }, [axiosInstance])

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
          throw new FetchError()
        })
        .finally(() => {
          setInitialFetchLoading(false)
        })
    }, [])

    return { initialFetchLoading, schemas, noUserLimits, fileConfig }
  }

  return { appInitFetch }
}
