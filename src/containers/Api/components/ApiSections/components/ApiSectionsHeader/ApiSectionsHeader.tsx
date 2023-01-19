import { APP_IMAGES } from "@modules/shared/constant"

export default function ApiSectionsHeader() {
  return (
    <div className='flex items-center gap-x-2 border-b-2 px-2'>
      <img
        src={APP_IMAGES.LOGO.image}
        alt={APP_IMAGES.LOGO.alt}
        className='w-[55px] object-contain'
      />

      <h1 className='mb-0 font-fontBold text-xl'>Api Docs</h1>
    </div>
  )
}
