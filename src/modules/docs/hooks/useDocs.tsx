import { useCallback, useContext } from "react"
import { SubSectionInf } from "../domain"
import { DocsContext } from "../context"

export default function useDocs() {
  const { docs } = useContext(DocsContext)

  const getAllDocs = useCallback(() => {
    let all: Array<SubSectionInf> = []

    for (const doc of docs) {
      all = [...all, ...doc.allSubSections]
    }

    return all
  }, [docs])

  return { docs, getAllDocs }
}
