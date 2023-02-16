import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { Delete, Plus } from "@modules/shared/assets/icons"
import React from "react"
import clsx from "clsx"

export default function DocsSections({
  sections,
  handleAddApiDocSubSection,
  handleDeleteApiDocSubSection,
  handleFetchSelectedSubSection,
  selectSubSectionID,
}: {
  sections: Array<ApiDocSection>
  handleAddApiDocSubSection: (id: string) => void
  handleDeleteApiDocSubSection: (id: string, name: string) => void
  handleFetchSelectedSubSection: (id: string) => void
  selectSubSectionID: string
}) {
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    subID: string,
    subName: string,
  ) => {
    e.stopPropagation()
    handleDeleteApiDocSubSection(subID, subName)
  }

  const subSectionClass = (id: string) =>
    clsx("mb-0", { "text-principalColor": id === selectSubSectionID })

  return (
    <div className='w-full flex flex-col mt-2'>
      {sections.map((s) => (
        <div className='flex flex-col mb-2' key={s._id}>
          <div className='text-black font-fontBold text-base'>{s.sectionTitle}</div>
          <div className='flex flex-col pl-4'>
            {s.subSections.map((sub) => (
              <div
                key={sub._id}
                className='text-base cursor-pointer flex items-center justify-between'
                onClick={() => handleFetchSelectedSubSection(sub._id)}
              >
                <p className={subSectionClass(sub._id)}>{sub.title}</p>

                <div className='flex items-center'>
                  <button onClick={(e) => handleDelete(e, sub._id, sub.title)}>
                    <Delete size={18} />
                  </button>
                </div>
              </div>
            ))}
            <div className='flex items-center cursor-pointer mt-1'>
              <div className='fill-principalColor'>
                <Plus size={15} />
              </div>

              <p
                className='mb-0 text-sm pl-1 text-principalColor'
                onClick={() => handleAddApiDocSubSection(s._id)}
              >
                New Sub Section
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
