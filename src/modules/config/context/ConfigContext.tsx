import { createContext, useState, useEffect } from "react"
import { FileConfigOption } from "../interfaces"
import { useErrorBoundary } from "react-error-boundary"
import { useConfigServices } from "../services"

interface Props {
  fileOptions: Array<FileConfigOption>
  loading: boolean
}

const ConfigContext = createContext<Props>({} as Props)

function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [fileOptions, setFileOptions] = useState<Array<FileConfigOption>>([])
  const [loading, setLoading] = useState(false)

  const { getFileOptions } = useConfigServices()
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    setLoading(true)

    getFileOptions({
      onSuccess: (data) => {
        setFileOptions(data)
      },
      onError: (error) => {
        showBoundary(error)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }, [])

  const data: Props = { fileOptions, loading }

  return <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
}

export { ConfigContext, ConfigProvider }
