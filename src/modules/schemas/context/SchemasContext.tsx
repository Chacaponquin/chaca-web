import { createContext, useState } from "react"
import { Schema } from "../interfaces/schema"
import { useErrorBoundary } from "react-error-boundary"
import { useSchemasServices } from "../services/"
import { DEFAULT_VERSION } from "../constants"

interface Props {
  schemas: Schema[]
  loading: boolean
  fetch(version: string): void
  version: string
}

export const SchemasContext = createContext<Props>({
  schemas: [] as Schema[],
  loading: true,
} as Props)

export function SchemasProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [schemas, setSchemas] = useState<Schema[]>([])
  const [version, setVersion] = useState(DEFAULT_VERSION)

  const { getSchemas } = useSchemasServices()
  const { showBoundary } = useErrorBoundary()

  function fetch(version: string) {
    setLoading(true)

    getSchemas({
      version: version,
      onSuccess: (data) => {
        setSchemas(data.schemas)
        setVersion(data.version)
      },
      onError: (error) => {
        showBoundary(error)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }

  const data: Props = { schemas, loading, fetch, version }

  return <SchemasContext.Provider value={data}>{children}</SchemasContext.Provider>
}
