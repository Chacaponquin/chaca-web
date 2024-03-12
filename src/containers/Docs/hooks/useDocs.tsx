import { useEffect, useMemo, useState } from "react"
import { useDocsServices } from "@modules/docs/services"
import { useDocs as useDocsModule } from "@modules/docs/hooks"
import { SelectedDoc } from "../interfaces"
import { DocSection, SubSectionInf } from "@modules/docs/domain"
import { useParams, useNavigate } from "react-router-dom"
import { APP_ROUTES } from "@modules/app/constants"

export default function useDocs() {
  const { section, doc } = useParams()
  const navigate = useNavigate()

  const [selectedDoc, setSelectedDoc] = useState<SelectedDoc | null>(null)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<string | null>(null)
  const [openAside, setOpenAside] = useState(false)

  const { getDoc } = useDocsServices()
  const { getAllDocs, docs } = useDocsModule()

  useEffect(() => {
    if (section && doc) {
      const foundSection = docs.find((d) => d.url === section)
      const foundDoc = getAllDocs().find((d) => d.url === doc)

      if (foundDoc && foundSection) {
        setSelectedDoc({ docId: foundDoc.id, sectionsId: [foundSection.id] })
      }
    } else {
      const firstSection = docs[0]
      const firstDoc = firstSection.allSubSections[0]

      navigate(APP_ROUTES.DOCS.BUILD_DOC_ROUTE(firstSection.url, firstDoc.url), { replace: true })
    }
  }, [getAllDocs, section, doc])

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
            setContent(data)
          })
          .finally(() => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    }
  }, [selectedDoc, getAllDocs])

  function handleChangeSelectedDoc(section: SelectedDoc) {
    const foundSection = docs.find((d) => d.id === section.sectionsId[0])
    const foundDoc = getAllDocs().find((d) => d.id === section.docId)

    if (foundDoc && foundSection) {
      navigate(APP_ROUTES.DOCS.BUILD_DOC_ROUTE(foundSection.url, foundDoc.url), {})
    }
  }

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev)
  }

  const docLocation: Array<string> = useMemo(() => {
    if (selectedDoc) {
      const foundSection = docs.find((d) => d.id === selectedDoc.sectionsId[0]) as DocSection
      const foundDoc = getAllDocs().find((d) => d.id === selectedDoc.docId) as SubSectionInf

      return [foundSection.title, foundDoc.title]
    } else {
      return []
    }
  }, [selectedDoc, getAllDocs])

  return {
    selectedDoc,
    handleChangeSelectedDoc,
    content,
    loading,
    docLocation,
    handleChangeOpenAside,
    openAside,
  }
}
