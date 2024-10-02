import { createContext, useMemo } from "react"
import { DocSection } from "../domain/core/base"
import { Algoliasearch, algoliasearch } from "algoliasearch"
import { DOCS } from "../domain/constants/docs"
import { useEnv } from "@modules/app/modules/env/hooks"

interface Props {
  docs: DocSection[]
  client: Algoliasearch
}

export const DocsContext = createContext<Props>({ docs: [] as DocSection[] } as Props)

export function DocsProvider({ children }: { children: React.ReactNode }) {
  const { ALGOLIA_API_ID, ALGOLIA_READ_API_KEY } = useEnv()

  const client = algoliasearch(ALGOLIA_API_ID, ALGOLIA_READ_API_KEY, {})

  const docs: DocSection[] = useMemo(() => DOCS, [])

  const value: Props = { docs: docs, client: client }

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>
}
