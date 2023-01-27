import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/hooks"

function SelectSectionErrorMessage() {
  const { ERROR_TEXT } = useLanguage({
    ERROR_TEXT: {
      en: "Sorry! This section is not available right now.",
      es: "Upss! esta sección no esta disponible actualmente",
    },
  })

  return (
    <div className='min-h-full flex w-full items-center flex-col px-4'>
      <img
        src={APP_IMAGES.ERROR.image}
        alt={APP_IMAGES.ERROR.alt}
        className='w-[400px] object-contain'
      />
      <h1 className='text-3xl font-fontBold mt-5 text-slate-500 text-center'>{ERROR_TEXT}</h1>
    </div>
  )
}

export default SelectSectionErrorMessage
