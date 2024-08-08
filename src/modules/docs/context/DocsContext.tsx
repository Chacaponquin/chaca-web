import { createContext, useMemo } from "react"
import { DocSection } from "../domain/core/base"
import {
  GUIDES_SECTION,
  API_SECTION,
  FIELD_TYPES_SECTION,
  SCHEMAS_SECTION,
} from "../domain/core/sections"

interface Props {
  docs: DocSection[]
}

export const DocsContext = createContext<Props>({ docs: [] as DocSection[] })

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const docs: DocSection[] = useMemo(() => {
    return [GUIDES_SECTION, API_SECTION, FIELD_TYPES_SECTION, SCHEMAS_SECTION]
  }, [])

  const value = { docs: docs }

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>
}
