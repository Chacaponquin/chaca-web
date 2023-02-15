import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { DocsSections, EmptySectionsMessage, LoadingDiv } from "./components"
import { Fragment } from "react"

export default function DocsMenu({
  sections,
  handleAddNewApiSection,
  fetchLoading,
  handleAddApiDocSubSection,
  handleDeleteApiDocSubSection,
}: {
  sections: Array<ApiDocSection>
  handleAddNewApiSection: () => void
  fetchLoading: boolean
  handleAddApiDocSubSection: (id: string) => void
  handleDeleteApiDocSubSection: (id: string, name: string) => void
}) {
  return (
    <div className='w-[250px] min-w-[250px] overflow-y-auto border-r-2 h-screen flex flex-col py-2 px-4 no-scroll'>
      {fetchLoading && <LoadingDiv loading={fetchLoading} />}
      {!fetchLoading && sections.length === 0 && (
        <EmptySectionsMessage handleAddNewApiSection={handleAddNewApiSection} />
      )}
      {!fetchLoading && sections.length > 0 && (
        <Fragment>
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
            sections={sections}
            handleAddApiDocSubSection={handleAddApiDocSubSection}
            handleDeleteApiDocSubSection={handleDeleteApiDocSubSection}
          />
        </Fragment>
      )}
    </div>
  )
}
