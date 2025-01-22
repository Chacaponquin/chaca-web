import { A, MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { SEQUENCE } from "@modules/docs/domain/core/sections/field-types"

export default function SequenceInfo() {
  const { INFO, DEFAULT } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Generates a number that follows a sequence with respect to the previous documents of the{" "}
          <MiniCode>Schema</MiniCode>
        </P>
      ),
      es: (
        <P>
          Genera un número que sigue una secuencia con respecto a los documentos previos del{" "}
          <MiniCode>Schema</MiniCode>
        </P>
      ),
    },
    DEFAULT: {
      en: (
        <P>
          By default the sequence starts with the number <MiniCode>1</MiniCode> and{" "}
          <MiniCode>1</MiniCode> as step. <A to={SEQUENCE.redirect}>Read about sequence fields</A>
        </P>
      ),
      es: (
        <P>
          Por defecto la secuencia empieza por el número <MiniCode>1</MiniCode> y con un paso de{" "}
          <MiniCode>1</MiniCode>. <A to={SEQUENCE.redirect}>Leer sobre los campos secuencia</A>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header={{ en: "Sequence field", es: "Campo secuencia" }}>
      {INFO}
      {DEFAULT}
    </TypeInfo>
  )
}
