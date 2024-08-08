import { useCallback, useContext } from "react"
import { DocSubSection } from "../domain/core/base"
import { DocsContext } from "../context"

export default function useDocs() {
  const { docs } = useContext(DocsContext)

  const getAllDocs = useCallback(() => {
    let all: DocSubSection[] = []

    for (const doc of docs) {
      all = [...all, ...doc.sections]
    }

    return all
  }, [docs])

  return { docs, getAllDocs }
}
