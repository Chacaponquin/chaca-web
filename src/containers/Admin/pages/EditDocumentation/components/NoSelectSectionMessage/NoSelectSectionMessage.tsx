import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/hooks"

export default function NoSelectSectionMessage() {
  const { MESSAGE } = useLanguage({
    MESSAGE: { en: "Select or create a sub-section", es: "Selecciona o crea una sección" },
  })

  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <img src={APP_IMAGES.EMPTY.image} alt={APP_IMAGES.EMPTY.alt} className='w-[500px]' />
      <p className='font-fontBold text-4xl text-grayStrongColor mt-5'>{MESSAGE}</p>
    </div>
  )
}
