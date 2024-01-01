import { SectionContent } from "@containers/LandigPage/shared/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Links } from "./components"

export default function LinksSection() {
  const { HEADER, TEXT } = useTranslation({
    HEADER: { en: "Made with ❤️ by Chacaponquin", es: "Hecho con ❤️ por Chacaponquin" },
    TEXT: {
      en: "If you want to be part of the community you can support us on our social networks",
      es: "Si quieres ser parte de la comunidad puedes apoyarnos en nuestras redes sociales",
    },
  })

  return (
    <SectionContent className="pb-20">
      <div className="items-center flex flex-col w-full bg-scale-2 px-10 py-8 rounded-md border-[1px] border-scale-9">
        <div className="flex flex-col text-white max-w-[800px] w-full mb-5">
          <h1 className="font-fontMedium text-3xl text-center mb-3 px-10">{HEADER}</h1>
          <p className="text-lg text-center text-scale-11">{TEXT}</p>
        </div>

        <Links />
      </div>
    </SectionContent>
  )
}
