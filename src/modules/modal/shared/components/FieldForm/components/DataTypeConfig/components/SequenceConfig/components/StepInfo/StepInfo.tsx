import { useTranslation } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/shared/shared/components"
import { P } from "@modules/modal/shared/shared/components/Info/components"

export default function StepInfo() {
  const { INFO } = useTranslation({
    INFO: {
      en: "Value that is added to the previous value of the sequence before generating",
      es: "Valor que se le suma al valor anterior de la secuencia antes de generar",
    },
  })

  return (
    <Info position="right">
      <P>{INFO}</P>
    </Info>
  )
}
