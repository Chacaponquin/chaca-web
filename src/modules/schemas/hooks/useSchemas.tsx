import { useContext } from "react"
import { SchemasContext } from "../context"

export default function useSchemas() {
  const { schemas, loading, fetch, version } = useContext(SchemasContext)

  return { schemas, loading, fetch, version }
}
