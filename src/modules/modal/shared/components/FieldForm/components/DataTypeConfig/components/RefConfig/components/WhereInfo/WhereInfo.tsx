import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { Info } from "@modules/modal/shared/shared/components"
import { MiniCode, P } from "@modules/modal/shared/shared/components/Info/components"

export default function WhereInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Function that filters the documents that can be referenced. Returns{" "}
          <MiniCode>true</MiniCode> or <MiniCode>false</MiniCode> indicating whether the document
          can be referenced
        </P>
      ),
      es: (
        <P>
          Función que filtra los documentos que pueden ser referenciados. Devuelve{" "}
          <MiniCode>true</MiniCode> o <MiniCode>false</MiniCode> que indica si el documento puede
          ser referenciado
        </P>
      ),
    },
  })

  return <Info position="right">{INFO}</Info>
}
