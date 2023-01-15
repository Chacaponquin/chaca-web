import { Fragment } from "react"
import ApiSections from "./components/ApiSections/ApiSections"
import LoaderContainer from "../../shared/components/Loader/LoaderContainer"
import SelectDocument from "./components/SelectDocument/SelectDocument"
import { SelectSectionErrorMessage, SectionsErrorMessage } from "./components/ErrorMessages"
import { useApi } from "./hooks/useApi"

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
    <div className='flex items-center justify-center w-full h-screen'>
      <LoaderContainer loading={sectionsLoading} className='w-[90px]'>
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
      </LoaderContainer>
    </div>
  )
}

export default Api
