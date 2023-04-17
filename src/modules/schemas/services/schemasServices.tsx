import { AppContext } from "@modules/shared/modules/app/context"
import { useCallback, useContext } from "react"
import { Schema, SubOption } from "../interfaces/schema.interface"

export function schemasServices() {
  const { schemas } = useContext(AppContext)

  const optionApiRoute = (route: string): string => {
    return `${process.env.REACT_APP_API_URL}${route}`
  }

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.parent === p)!
    },
    [schemas],
  )

  const findType = useCallback(
    (p: string, t: string): SubOption => {
      const foundParent = schemas.find((el) => el.parent === p)!
      return foundParent.options.find((el) => el.name === t)!
    },
    [schemas],
  )

  const findParentOptions = (parent: string): Array<SubOption> => {
    return findParent(parent).options
  }

  return { findParent, findType, findParentOptions, optionApiRoute }
}
