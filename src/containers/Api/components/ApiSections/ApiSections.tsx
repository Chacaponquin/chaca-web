import { ApiSection } from "@modules/docs/interfaces/apiSections.interface"
import { ApiSearch, SectionsContainer } from "./components"

export default function ApiSections({
  sections,
  selectSection,
}: {
  sections: Array<ApiSection>
  selectSection: string | null
}) {
  return (
    <div className='h-full min-w-[300px] max-w-[300px] border-r-2 gap-y-1 flex flex-col '>
      <div className='px-6 py-6'>
        <ApiSearch />
        <SectionsContainer selectSection={selectSection} sections={sections} />
      </div>
    </div>
  )
}
