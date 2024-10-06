import { TryResult } from "@containers/Docs/shared/components/TryRoute/domain"
import { ModuleDocSubSection } from "@modules/docs/domain/core/sections/modules/module-section"
import React, { createContext } from "react"

interface Props {
  section: ModuleDocSubSection
  result: TryResult
}

export const SectionContext = createContext<Props>({} as Props)

export function SectionProvider({
  children,
  result,
  section,
}: { children: React.ReactNode } & Props) {
  const data: Props = { section, result }

  return <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
}
