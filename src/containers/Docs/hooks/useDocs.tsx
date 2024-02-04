import { useEffect, useState } from "react"
import { useDocsServices } from "@modules/docs/services"
import { useDocs as useDocsModule } from "@modules/docs/hooks"
import { SelectedDoc } from "../interfaces"

export default function useDocs() {
  const [selectedDoc, setSelectedDoc] = useState<SelectedDoc | null>(null)
  const { getDoc } = useDocsServices()
  const { DOCS } = useDocsModule()

  useEffect(() => {
    if (selectedDoc) {
      getDoc({
        folder: DOCS[selectedDoc.sectionIndex].folder,
        file: DOCS[selectedDoc.sectionIndex].subSections[selectedDoc.subSectionIndex].file,
      }).then((data) => {
        console.log(data)
      })
    }
  }, [selectedDoc])

  function handleChangeSelectedDoc(section: SelectedDoc) {
    setSelectedDoc(section)
  }

  return { selectedDoc, handleChangeSelectedDoc }
}
