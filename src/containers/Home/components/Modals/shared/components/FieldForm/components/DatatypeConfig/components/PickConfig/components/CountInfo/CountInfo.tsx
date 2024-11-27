import { useTranslation } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/components"
import { P } from "@modules/modal/components/Info/components"

export default function CountInfo() {
  const { INFO } = useTranslation({
    INFO: { en: "Number of values to choose", es: "Cantidad de values a elegir" },
  })

  return (
    <Info position="right">
      <P>{INFO}</P>
    </Info>
  )
}
