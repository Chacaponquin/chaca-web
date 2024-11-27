import { useTranslation } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/components"
import { P } from "@modules/modal/components/Info/components"

export default function ProbInfo() {
  const { INFO } = useTranslation({
    INFO: {
      en: "The probability value must be between 0 and 1",
      es: "El valor de la probabilidad debe encontrarse entre 0 y 1",
    },
  })

  return (
    <Info position="right">
      <P>{INFO}</P>
    </Info>
  )
}
