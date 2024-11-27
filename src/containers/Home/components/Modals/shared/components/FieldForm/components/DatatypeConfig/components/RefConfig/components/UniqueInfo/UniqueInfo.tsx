import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/components"
import { MiniCode, P } from "@modules/modal/components/Info/components"

export default function UniqueInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          If enabled, the reference chosen for this field will be unique and will not be repeated in
          any other document on this <MiniCode>Schema</MiniCode>
        </P>
      ),
      es: (
        <P>
          Si está habilitado la referencia escogida para este campo será único y no se repetirá en
          cualquier otro documento de este <MiniCode>Schema</MiniCode>
        </P>
      ),
    },
  })

  return <Info position="right">{INFO}</Info>
}
