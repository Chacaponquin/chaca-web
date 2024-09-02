import { createContext, useMemo } from "react"
import { DocSection } from "../domain/core/base"
import {
  GET_STARTED_SECTION,
  API_SECTION,
  FIELD_TYPES_SECTION,
  MODULES_SECTION,
  CONCEPTS_SECTION,
  EXPORT_SECTION,
} from "../domain/core/sections"

interface Props {
  docs: DocSection[]
}

export const DocsContext = createContext<Props>({ docs: [] as DocSection[] } as Props)

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const docs: DocSection[] = useMemo(() => {
    return [
      GET_STARTED_SECTION,
      CONCEPTS_SECTION,
      FIELD_TYPES_SECTION,
      MODULES_SECTION,
      EXPORT_SECTION,
      API_SECTION,
    ]
  }, [])

  const value: Props = { docs: docs }

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>
}
