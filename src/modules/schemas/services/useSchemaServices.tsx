import { useCallback, useContext } from "react"
import { Schema, SubOption } from "../interfaces/schema.interface"
import { useEnvServices } from "@modules/app/modules/env/services"
import { SchemasContext } from "../context"

export function useSchemaServices() {
  const { schemas } = useContext(SchemasContext)
  const { API_ROUTE } = useEnvServices()

  const optionApiRoute = (route: string): string => {
    return `${API_ROUTE}${route}`
  }

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.name === p) as Schema
    },
    [schemas],
  )

  const findType = useCallback(
    (p: string, t: string): SubOption => {
      const foundParent = findParent(p)
      return foundParent.options.find((el) => el.name === t) as SubOption
    },
    [schemas],
  )

  const findParentOptions = (parent: string): Array<SubOption> => {
    return findParent(parent).options
  }

  return { findParent, findType, findParentOptions, optionApiRoute, schemas }
}
