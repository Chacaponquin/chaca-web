import { A, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { PROBABILITY } from "@modules/docs/domain/core/sections/field-types"

export default function ProbabilityInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <>
          Select one of the defined values with respect to the selection probabilities of each of
          these. <A to={PROBABILITY.redirect}>Read about probability fields</A>
        </>
      ),
      es: (
        <>
          Selecciona uno de los valores definidos con respecto a las probabilidades de selección de
          cada uno de estos. <A to={PROBABILITY.redirect}>Leer sobre campos de probabilidad</A>
        </>
      ),
    },
  })

  return (
    <TypeInfo type="default" header={{ en: "Probability field", es: "Campo de probabilidad" }}>
      <P>{INFO}</P>
    </TypeInfo>
  )
}
