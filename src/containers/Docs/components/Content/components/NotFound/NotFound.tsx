import { Image } from "@modules/app/components"
import { APP_IMAGES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function NotFound() {
  const { MESSAGE } = useTranslation({
    MESSAGE: {
      en: "Sorry, but we can't find what you're looking for.",
      es: "Perdona, pero no encontramos lo que buscas ",
    },
  })

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col items-center gap-6 max-w-[540px]">
        <Image image={APP_IMAGES.ERROR} className="w-[460px]" />
        <h1 className="text-3xl font-fontSemiBold text-center dark:text-white">{MESSAGE}</h1>
      </div>
    </div>
  )
}
