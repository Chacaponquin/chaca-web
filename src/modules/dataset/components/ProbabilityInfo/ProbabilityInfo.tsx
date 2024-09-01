import { P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function ProbabilityInfo() {
  const { INFO } = useTranslation({
    INFO: {
      en: "Select one of the defined values with respect to the selection probabilities of each of these",
      es: "Selecciona uno de los valores definidos con respecto a las probabilidades de selección de cada uno de estos",
    },
  })

  return (
    <TypeInfo type="default" header="Probability field">
      <P>{INFO}</P>
    </TypeInfo>
  )
}
