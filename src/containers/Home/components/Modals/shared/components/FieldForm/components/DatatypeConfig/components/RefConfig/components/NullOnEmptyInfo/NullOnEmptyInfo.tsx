import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/components"
import { MiniCode, P } from "@modules/modal/components/Info/components"

export default function NullOnEmptyInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          A <MiniCode>null</MiniCode> value is returned if there are no more values to reference.
          Prevents an exception from being thrown when there are no more values to reference.
        </P>
      ),
      es: (
        <P>
          Si no hay más valores para poder referenciar se devuelve <MiniCode>null</MiniCode>. Evita
          que se lance una excepción al quedarse sin valores para referenciar
        </P>
      ),
    },
  })

  return <Info position="right">{INFO}</Info>
}
