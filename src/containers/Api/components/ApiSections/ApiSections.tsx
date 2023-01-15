import { ApiSection } from "../../interfaces/apiSections.interface"
import { v4 as uuid } from "uuid"
import ApiSearch from "./components/ApiSearch"
import SubSection from "./components/SubSection"

export default function ApiSections({
  sections,
  selectSection,
  handleSelectSubSection,
}: {
  sections: Array<ApiSection>
  selectSection: string | null
  handleSelectSubSection: (route: string) => void
}) {
  return (
    <div className='h-screen px-4 min-w-[300px] max-w-[300px] border-r-2 gap-3 flex flex-col py-2'>
      <ApiSearch />

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
    </div>
  )
}
