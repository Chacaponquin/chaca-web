import { ApiDocSection } from "@modules/admin/api/interfaces/apiDocSection.interface"
import { Plus } from "@modules/shared/assets/icons"

export default function DocsSections({ sections }: { sections: Array<ApiDocSection> }) {
  return (
    <div className='w-full flex flex-col mt-2'>
      {sections.map((s) => (
        <div className='flex flex-col mb-2' key={s._id}>
          <div className='text-black font-fontBold text-base'>{s.sectionTitle}</div>
          <div className='flex flex-col pl-2 '>
            {s.subSections.map((sub) => (
              <div key={sub._id} className='text-base'>
                {sub.title}
              </div>
            ))}
            <div className='flex items-center cursor-pointer mt-1'>
              <div className='fill-principalColor'>
                <Plus size={15} />
              </div>

              <p className='mb-0 text-base pl-1 text-principalColor'>New Sub Section</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
