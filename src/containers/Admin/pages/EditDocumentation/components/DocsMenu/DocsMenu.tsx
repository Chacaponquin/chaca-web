import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import { DocsSections, EmptySectionsMessage } from "./components"
import { Fragment } from "react"

export default function DocsMenu({
  sections,
  handleAddNewApiSection,
}: {
  sections: Array<ApiDocSection>
  handleAddNewApiSection: () => void
}) {
  return (
    <div className='w-[250px] min-w-[250px] border-r-2 h-screen flex flex-col py-2 px-4 no-scroll'>
      {sections.length === 0 ? (
        <EmptySectionsMessage handleAddNewApiSection={handleAddNewApiSection} />
      ) : (
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

          <DocsSections sections={sections} />
        </Fragment>
      )}
    </div>
  )
}
