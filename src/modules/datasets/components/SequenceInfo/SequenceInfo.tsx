import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function SequenceInfo() {
  const { INFO, DEFAULT } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Generates a number that follows a sequence with respect to the previous documents of the{" "}
          <MiniCode>Dataset</MiniCode>
        </P>
      ),
      es: (
        <P>
          Genera un número que sigue una secuencia con respecto a los documentos previos del{" "}
          <MiniCode>Dataset</MiniCode>
        </P>
      ),
    },
    DEFAULT: {
      en: (
        <P>
          By default the sequence starts with the number <MiniCode>1</MiniCode> and{" "}
          <MiniCode>1</MiniCode> as step
        </P>
      ),
      es: (
        <P>
          Por defecto la secuencia empieza por el número <MiniCode>1</MiniCode> y con un paso de{" "}
          <MiniCode>1</MiniCode>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header="Sequence field">
      {INFO}
      {DEFAULT}
    </TypeInfo>
  )
}
