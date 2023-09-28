import { createContext, useState } from "react"
import { Schema } from "../interfaces/schema.interface"
import { useQuery } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { useErrorBoundary } from "react-error-boundary"
import { v4 as uuid } from "uuid"
import { ApiSchemaResponse } from "../dto/schema"

interface SchemasContextProps {
  schemas: Array<Schema>
}

const SchemasContext = createContext<SchemasContextProps>({ schemas: [] })

const SchemasProvider = ({ children }: { children: React.ReactElement }) => {
  const [schemas, setSchemas] = useState<Array<Schema>>([])
  const { showBoundary } = useErrorBoundary()

  useQuery<Array<ApiSchemaResponse>>({
    url: API_ROUTES.GET_SCHEMAS,
    onCompleted: (data) => {
      setSchemas(
        data.map((d) => ({
          id: uuid(),
          name: d.name,
          options: d.options.map((o) => ({
            id: uuid(),
            name: o.name,
            arguments: o.arguments,
            showName: o.showName,
          })),
          showName: d.showName,
        })),
      )
    },
    onError: (error) => {
      showBoundary(error)
    },
  })

  const data: SchemasContextProps = { schemas }

  return <SchemasContext.Provider value={data}>{children}</SchemasContext.Provider>
}

export { SchemasContext, SchemasProvider }
