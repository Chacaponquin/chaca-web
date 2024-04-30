import { useContext, useCallback } from "react"
import { Schema, SubOption } from "../interfaces/schema"
import { SchemasContext } from "../context"

export default function useSchemas() {
  const { schemas, loading } = useContext(SchemasContext)

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.id === p) as Schema
    },
    [schemas],
  )

  const findType = useCallback(
    (p: string, t: string): SubOption => {
      const foundParent = findParent(p)
      return foundParent.options.find((el) => el.id === t) as SubOption
    },
    [findParent],
  )

  const findParentOptions = useCallback(
    (parent: string): SubOption[] => {
      const found = findParent(parent).options
      return found
    },
    [findParent],
  )

  return { findParent, findType, findParentOptions, schemas, loading }
}
