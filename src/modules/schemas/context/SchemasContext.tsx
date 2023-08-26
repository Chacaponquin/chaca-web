import { createContext, useState } from "react"
import { Schema } from "../interfaces/schema.interface"
import { useQuery } from "@modules/app/modules/http/hooks"
import { API_ROUTES } from "@modules/app/constants/ROUTES"
import { FetchError } from "@modules/app/modules/http/errors"

interface SchemasContextProps {
  schemas: Array<Schema>
}

const SchemasContext = createContext<SchemasContextProps>({ schemas: [] })

const SchemasProvider = ({ children }: { children: React.ReactElement }) => {
  const [schemas, setSchemas] = useState<Schema[]>([])

  useQuery<Array<Schema>>({
    url: API_ROUTES.GET_SCHEMAS,
    onCompleted: (data) => {
      setSchemas(data)
    },
    onError: () => {
      throw new FetchError()
    },
  })

  const data: SchemasContextProps = { schemas }

  return <SchemasContext.Provider value={data}>{children}</SchemasContext.Provider>
}

export { SchemasContext, SchemasProvider }
