import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"

export default function NoSelectFieldMessage() {
  const { ERROR_TEXT } = useLanguage({
    ERROR_TEXT: { en: "Select a field", es: "Selecciona un campo" },
  })

  return (
    <div className='flex items-center justify-center h-full flex-col'>
      <img
        src={APP_IMAGES.EMPTY.image}
        alt={APP_IMAGES.EMPTY.alt}
        className='w-[500px] exsm:w-[270px] esm:w-[350px]'
      />
      <h1 className='text-grayStrongColor text-center text-3xl font-fontBold mt-4'>{ERROR_TEXT}</h1>
    </div>
  )
}
