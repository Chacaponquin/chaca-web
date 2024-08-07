import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Text() {
  const { FIRST_HEADER, SECOND_HEADER, TEXT } = useTranslation({
    FIRST_HEADER: { en: "A simple way", es: "Una forma fácil" },
    SECOND_HEADER: { en: "To create your Data", es: "De crear tus Datos" },
    TEXT: {
      en: "Let us help you create large amounts of realistic data to implement tests, demos and databases",
      es: "Dejanos ayudarte a crear grandes cantidades de datos realistas para implementar tests, demos y bases de datos",
    },
  })

  return (
    <div className="flex flex-col items-center">
      <h1 className="esm:text-5xl text-6xl lg:text-7xl font-fontBold">{FIRST_HEADER}</h1>
      <h1 className="esm:text-5xl text-6xl lg:text-7xl font-fontBold text-purple-600">
        {SECOND_HEADER}
      </h1>

      <p className="text-xl mt-8 px-8 text-scale-11 esm:text-lg esm:px-2 max-w-[1000px]">{TEXT}</p>
    </div>
  )
}
