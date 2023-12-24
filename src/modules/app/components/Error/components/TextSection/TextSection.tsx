import { useTranslation } from "@modules/app/modules/language/hooks"

export default function TextSection() {
  const { HEADER_TEXT, ERROR_MESSAGE } = useTranslation({
    HEADER_TEXT: { en: "Something went wrong", es: "Algo salió mal" },
    ERROR_MESSAGE: {
      en: "It seems that there was an error during some process of the application. We recommend that you refresh the page and repeat the process.",
      es: "Parece que hubo un error durante algún proceso de la aplicación. Te recomendamos que refresques la página y repitas el proceso.",
    },
  })

  return (
    <section className="flex flex-col xl:text-left text-center max-w-[500px] gap-5 esm:gap-2">
      <h1 className="font-fontTitle dark:text-white text-6xl esm:text-4xl">{HEADER_TEXT}</h1>
      <p className="text-scale-9 dark:text-scale-11 text-lg esm:text-base">{ERROR_MESSAGE}</p>
    </section>
  )
}
