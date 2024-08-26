import { createContext, useState } from "react"
import { Schema } from "../domain/core/schema"
import { useErrorBoundary } from "react-error-boundary"
import { useSchemasServices } from "../services/"
import { DEFAULT_VERSION } from "../domain/constants"

interface Props {
  schemas: Schema[]
  loading: boolean
  fetch(props: FetchProps): void
  version: string
}

export const SchemasContext = createContext<Props>({
  schemas: [] as Schema[],
  loading: true,
} as Props)

interface FetchProps {
  version: string
  success(schemas: Schema[]): void
}

export function SchemasProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [schemas, setSchemas] = useState<Schema[]>([])
  const [version, setVersion] = useState(DEFAULT_VERSION)

  const { getSchemas } = useSchemasServices()
  const { showBoundary } = useErrorBoundary()

  function fetch({ version, success }: FetchProps) {
    setLoading(true)

    getSchemas({
      version: version,
      onSuccess: (data) => {
        setSchemas(data.schemas)
        setVersion(data.version)

        success(data.schemas)
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
