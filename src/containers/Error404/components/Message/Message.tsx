import { useLanguage } from "@modules/app/modules/language/hooks"

export default function Message() {
  const { ERROR_MESSAGE } = useLanguage({
    ERROR_MESSAGE: { en: "Opps! Page Not Found", es: "Opps! No se encontró la página" },
  })

  return (
    <h2 className="font-fontBold dark:text-white uppercase pt-5 lg:text-6xl text-center esm:text-4xl esm:py-3 sm:text-5xl">
      {ERROR_MESSAGE}
    </h2>
  )
}
