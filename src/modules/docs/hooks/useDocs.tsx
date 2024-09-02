import { useContext, useMemo } from "react"
import { DocsContext } from "../context"
import { DocSubSection } from "../domain/core/base"
import { useLocation } from "react-router-dom"

export default function useDocs() {
  const { docs } = useContext(DocsContext)
  const location = useLocation()

  const selected: DocSubSection = useMemo(() => {
    const sections = [] as DocSubSection[]

    for (const section of docs) {
      section.sections.forEach((s) => {
        sections.push(s)
      })
    }

    const found = sections.find((s) => s.redirect === location.pathname) as DocSubSection

    return found
  }, [docs, location])

  return { docs, selected }
}
