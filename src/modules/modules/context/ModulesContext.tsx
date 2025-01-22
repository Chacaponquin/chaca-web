import { createContext, useState } from "react"
import { useErrorBoundary } from "react-error-boundary"
import { DEFAULT_VERSION } from "../domain/constants"
import { ModuleSection } from "../domain/core/module-section"
import { getModules } from "../services/get-modules"

interface Props {
  modules: ModuleSection[]
  loading: boolean
  fetch(props: FetchProps): void
  version: string
}

export const ModulesContext = createContext<Props>({
  modules: [] as ModuleSection[],
  loading: true,
} as Props)

interface FetchProps {
  version: string
  success(modules: ModuleSection[]): void
}

export function ModulesProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [modules, setSchemas] = useState<ModuleSection[]>([])
  const [version, setVersion] = useState(DEFAULT_VERSION)

  const { showBoundary } = useErrorBoundary()

  function fetch({ version, success }: FetchProps) {
    setLoading(true)

    getModules({
      version: version,
      onSuccess: (data) => {
        setSchemas(data.modules)
        setVersion(data.version)

        success(data.modules)
      },
      onError: (error) => {
        showBoundary(error)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }

  const data: Props = { modules, loading, fetch, version }

  return <ModulesContext.Provider value={data}>{children}</ModulesContext.Provider>
}
