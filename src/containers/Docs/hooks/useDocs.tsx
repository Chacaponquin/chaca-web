import { useState } from "react"
import { DocSubSection } from "@modules/docs/interfaces"

export default function useDocs() {
  const [selectedDoc, setSelectedDoc] = useState<DocSubSection | null>(null)

  function handleChangeSelectedDoc(section: DocSubSection) {
    setSelectedDoc(section)
  }

  return { selectedDoc, handleChangeSelectedDoc }
}
