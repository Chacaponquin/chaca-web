import { useTranslation } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/components"
import { P } from "@modules/modal/components/Info/components"

export default function StartsWithInfo() {
  const { INFO } = useTranslation({
    INFO: {
      en: "Value which sequence starts with",
      es: "Valor con el que inicia la secuencia",
    },
  })

  return (
    <Info position="right">
      <P>{INFO}</P>
    </Info>
  )
}
