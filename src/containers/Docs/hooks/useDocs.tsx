import { useEffect, useState } from "react"
import { useDocsServices } from "@modules/docs/services"
import { useDocs as useDocsModule } from "@modules/docs/hooks"
import { SelectedDoc } from "../interfaces"

export default function useDocs() {
  const [selectedDoc, setSelectedDoc] = useState<SelectedDoc | null>(null)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<string | null>(null)
  const { getDoc } = useDocsServices()
  const { getAllDocs, DOCS } = useDocsModule()

  useEffect(() => {
    if (selectedDoc) {
      const found = getAllDocs().find((d) => d.id === selectedDoc.docId)

      if (found) {
        setLoading(true)

        getDoc({
          folder: found.folder,
          file: found.file,
        })
          .then((data) => {
            return setContent(data)
          })
          .finally(() => {
            setLoading(false)
          })
      }
    }
  }, [selectedDoc, getAllDocs])

  function handleChangeSelectedDoc(section: SelectedDoc) {
    setSelectedDoc(section)
  }

  return { selectedDoc, handleChangeSelectedDoc, content, loading, docs: DOCS }
}
