import { RouteContentLoader, LoaderContainer } from "@modules/shared/components/Loader"
import { useApi } from "./hooks"
import { ApiSections, SectionsErrorMessage, SelectDocument } from "./components"

const Api = () => {
  const {
    sections,
    fetchSubSectionLoading,
    selectSectionContent,
    sectionsLoading,
    sectionsError,
    actualSubSection,
  } = useApi()

  return (
    <RouteContentLoader loading={sectionsLoading}>
      {sectionsError ? (
        <SectionsErrorMessage />
      ) : (
        <div className='w-full flex items-center justify-center'>
          <ApiSections sections={sections} selectSection={actualSubSection || ""} />

          <div className='w-full flex items-center justify-center'>
            {fetchSubSectionLoading ? (
              <LoaderContainer className='w-[60px]' loading={fetchSubSectionLoading} />
            ) : (
              <SelectDocument content={selectSectionContent} />
            )}
          </div>
        </div>
      )}
    </RouteContentLoader>
  )
}

export default Api
