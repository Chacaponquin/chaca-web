import { createContext, useState, useEffect } from "react"
import { Schema } from "../interfaces/schema"
import { useErrorBoundary } from "react-error-boundary"
import { useSchemasServices } from "../services/"

interface Props {
  schemas: Array<Schema>
  loading: boolean
}

const SchemasContext = createContext<Props>({ schemas: [], loading: true })

const SchemasProvider = ({ children }: { children: React.ReactElement }) => {
  const [loading, setLoading] = useState(false)
  const [schemas, setSchemas] = useState<Array<Schema>>([])
  const { getSchemas } = useSchemasServices()
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    setLoading(true)
    getSchemas({
      onSuccess: (data) => {
        setSchemas(data)
      },
      onError: (error) => {
        showBoundary(error)
      },
      onFinally: () => {
        setLoading(false)
      },
    })
  }, [])

  const data: Props = { schemas, loading }

  return <SchemasContext.Provider value={data}>{children}</SchemasContext.Provider>
}

export { SchemasContext, SchemasProvider }
