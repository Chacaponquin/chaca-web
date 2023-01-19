import { Fragment } from "react"
import { RouteContentLoader, LoaderContainer } from "@shared/components/Loader"
import { useApi } from "./hooks"
import {
  ApiSections,
  SectionsErrorMessage,
  SelectDocument,
  SelectSectionErrorMessage,
} from "./components"

const Api = () => {
  const {
    sections,
    selectSection,
    selectSectionError,
    selectSectionContent,
    handleSelectSubSection,
    sectionsLoading,
    sectionsError,
    selectSectionLoading,
  } = useApi()

  return (
    <RouteContentLoader loading={sectionsLoading}>
      {sectionsError ? (
        <SectionsErrorMessage />
      ) : (
        <div className='w-full flex items-center justify-center'>
          <ApiSections
            sections={sections}
            selectSection={selectSection}
            handleSelectSubSection={handleSelectSubSection}
          />

          <div className='w-full flex items-center justify-center'>
            {selectSectionLoading ? (
              <LoaderContainer className='w-[60px]' loading={selectSectionLoading} />
            ) : (
              <Fragment>
                {selectSectionError ? (
                  <SelectSectionErrorMessage />
                ) : (
                  <SelectDocument content={selectSectionContent} />
                )}
              </Fragment>
            )}
          </div>
        </div>
      )}
    </RouteContentLoader>
  )
}

export default Api
