import { useState, useEffect } from "react"
import { useLazyQuery, useQuery } from "../../../shared/hooks"
import { API_ROUTES } from "../../../shared/routes"
import { ApiSection } from "../interfaces/apiSections.interface"

export function useApi() {
  const [sections, setSections] = useState<Array<ApiSection>>([])
  const [selectSection, setSelectSection] = useState<string | null>(null)
  const [selectSectionContent, setSelectSectionContent] = useState("")

  const { error: sectionsError, loading: sectionsLoading } = useQuery<Array<ApiSection>>({
    url: API_ROUTES.DOCS.GET_DOC_SECTIONS,
    onCompleted: (sections) => {
      setSections(sections)
    },
  })

  const [fetchSelectSection, { loading: selectSectionLoading, error: selectSectionError }] =
    useLazyQuery<string>()

  const handleSelectSubSection = (route: string) => {
    setSelectSection(route)
  }

  useEffect(() => {
    if (selectSection) {
      fetchSelectSection({
        url: `docs/${selectSection}`,
        onCompleted: (content) => {
          setSelectSectionContent(content)
        },
      })
    }
  }, [selectSection])

  return {
    handleSelectSubSection,
    selectSectionLoading,
    selectSectionError,
    sectionsError,
    sectionsLoading,
    sections,
    selectSectionContent,
    selectSection,
  }
}
