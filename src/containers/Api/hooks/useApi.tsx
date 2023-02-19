import { useState } from "react"
import { useQuery } from "@modules/shared/hooks"
import { API_ROUTES, APP_ROUTES } from "@modules/shared/routes"
import { ApiSection } from "../../../modules/docs/interfaces/apiSections.interface"
import { useParams, useNavigate } from "react-router-dom"

export function useApi() {
  const { section: actualSection, subSection: actualSubSection } = useParams()
  const navigate = useNavigate()

  const [sections, setSections] = useState<Array<ApiSection>>([])
  const [selectSectionContent, setSelectSectionContent] = useState("")

  const { error: sectionsError, loading: sectionsLoading } = useQuery<Array<ApiSection>>({
    url: API_ROUTES.DOCS.GET_DOC_SECTIONS,
    onCompleted: (sections) => {
      setSections(sections)
    },
  })

  const { loading: fetchSubSectionLoading } = useQuery<string>({
    url: `${API_ROUTES.DOCS.GET_API_DOC_SUB_SECTION}/${actualSection}/${actualSubSection}`,
    onCompleted: (subSectionInfo) => {
      setSelectSectionContent(subSectionInfo)
    },
    onError: () => {
      navigate(APP_ROUTES.NOT_FOUND, { replace: true })
    },
  })

  return {
    sectionsError,
    sectionsLoading,
    fetchSubSectionLoading,
    sections,
    selectSectionContent,
    actualSubSection,
  }
}
