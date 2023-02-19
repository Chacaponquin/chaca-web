import SubSection from "../SubSection/SubSection"
import { v4 as uuid } from "uuid"
import { ApiSection } from "@modules/docs/interfaces/apiSections.interface"

function SectionsContainer({
  sections,
  selectSection,
}: {
  sections: Array<ApiSection>
  selectSection: string | null
}) {
  return (
    <div className='w-full flex flex-col'>
      {sections.map((s) => (
        <div key={uuid()} className='mb-3'>
          <h1 className='font-fontBold text-lg'>{s.sectionTitle}</h1>

          <div className='flex flex-col gap-1 overflow-x-auto no-scroll'>
            {s.subSections.map((sub) => (
              <SubSection
                key={uuid()}
                subSection={sub}
                isSelect={selectSection === sub.frontRoute}
                sectionURL={s.frontRoute}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionsContainer
