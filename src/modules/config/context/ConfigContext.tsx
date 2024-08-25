import { createContext, useState, useEffect } from "react"
import { FileConfigOption } from "../domain/core"
import { useErrorBoundary } from "react-error-boundary"
import { useConfigServices } from "../services"

interface Props {
  fileOptions: FileConfigOption[]
  loading: boolean
}

export const ConfigContext = createContext<Props>({} as Props)

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [fileOptions, setFileOptions] = useState<FileConfigOption[]>([])
  const [loading, setLoading] = useState(true)

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
