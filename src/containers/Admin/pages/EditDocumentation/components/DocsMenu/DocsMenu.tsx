import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { DocsSections, EmptySectionsMessage, LoadingDiv } from "./components"
import { Fragment } from "react"
import { APP_IMAGES } from "@modules/shared/constant"

export default function DocsMenu({
  sections,
  handleAddNewApiSection,
  fetchLoading,
  handleAddApiDocSubSection,
  handleDeleteApiDocSubSection,
  handleFetchSelectedSubSection,
  selectSubSectionID,
}: {
  sections: Array<ApiDocSection>
  handleAddNewApiSection: () => void
  fetchLoading: boolean
  handleAddApiDocSubSection: (id: string) => void
  handleDeleteApiDocSubSection: (id: string, name: string) => void
  handleFetchSelectedSubSection: (id: string) => void
  selectSubSectionID: string
}) {
  return (
    <div className='sticky w-[250px] min-w-[250px] overflow-y-auto border-r-2 h-screen flex flex-col py-2 px-4 no-scroll'>
      {fetchLoading && <LoadingDiv loading={fetchLoading} />}
      {!fetchLoading && sections.length === 0 && (
        <EmptySectionsMessage handleAddNewApiSection={handleAddNewApiSection} />
      )}
      {!fetchLoading && sections.length > 0 && (
        <Fragment>
          <div className='flex items-center gap-x-1 mb-2'>
            <img src={APP_IMAGES.LOGO.image} alt={APP_IMAGES.LOGO.alt} className='w-[55px]' />
            <p className='mb-0 font-fontExtraBold uppercase text-xl'>CHACA DOCS</p>
          </div>

          <div>
            <ChacaSimpleButton
              color='primary'
              text='New Section'
              size='medium'
              className='!w-full'
              onClick={handleAddNewApiSection}
            />
          </div>

          <DocsSections
            selectSubSectionID={selectSubSectionID}
            sections={sections}
            handleAddApiDocSubSection={handleAddApiDocSubSection}
            handleDeleteApiDocSubSection={handleDeleteApiDocSubSection}
            handleFetchSelectedSubSection={handleFetchSelectedSubSection}
          />
        </Fragment>
      )}
    </div>
  )
}
