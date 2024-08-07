import { useTranslation } from "@modules/app/modules/language/hooks"

export default function HeaderText() {
  const { FIRST_HEADER, SECOND_HEADER, DESCRIPTION } = useTranslation({
    FIRST_HEADER: { en: "A solution for", es: "Una solución para" },
    SECOND_HEADER: { en: "all your data", es: "todos tus datos" },
    DESCRIPTION: {
      en: "Chaca is a tool to generate your mock data in a simple way, export it in different formats and implemented in different ways to be able to use it",
      es: "Chaca es una herramienta para generar tu mock data de forma sencilla, exportarla en distintos formatos e implementada en distintas formas para poder utilizarla",
    },
  })

  return (
    <header className="flex flex-col w-full items-start">
      <div className="flex text-5xl text-white text-left gap-2.5 flex-wrap esm:text-4xl">
        <h1 className="font-fontBold whitespace-nowrap">{FIRST_HEADER}</h1>
        <p className="font-fontBold text-purple-6 whitespace-nowrap">{SECOND_HEADER}</p>
      </div>

      <p className="text-scale-11 text-xl esm:text-lg mt-5 w-full max-w-[1000px]">{DESCRIPTION}</p>
    </header>
  )
}
