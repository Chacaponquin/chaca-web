import SubSection from "./SubSection"
import { v4 as uuid } from "uuid"
import { ApiSection } from "../../../interfaces/apiSections.interface"

function SectionsContainer({
  sections,
  handleSelectSubSection,
  selectSection,
}: {
  sections: Array<ApiSection>
  selectSection: string | null
  handleSelectSubSection: (route: string) => void
}) {
  return (
    <div className='w-full flex flex-col'>
      {sections.map((s) => (
        <div key={uuid()} className='mb-3'>
          <h1 className='font-fontBold text-lg'>{s.sectionTitle}</h1>

          <div className='flex flex-col gap-1'>
            {s.subSections.map((sub) => (
              <SubSection
                key={uuid()}
                handleSelectSubSection={() => handleSelectSubSection(sub.route)}
                subSection={sub}
                isSelect={selectSection === sub.route}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionsContainer
