import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function RefInfo() {
  const { INFO, SIMILAR } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          References a <MiniCode>key</MiniCode> field from another <MiniCode>Schema</MiniCode> and
          gets the value of that field in any generated documents
        </P>
      ),
      es: (
        <P>
          Referencia a un campo <MiniCode>key</MiniCode> de otro <MiniCode>Schema</MiniCode> y
          obtiene el valor de ese campo en cualquiera de los documentos generados
        </P>
      ),
    },
    SIMILAR: {
      en: (
        <P>
          Similar to <MiniCode>FOREIGN KEY</MiniCode> in SQL
        </P>
      ),
      es: (
        <P>
          Similar a una <MiniCode>FOREIGN KEY</MiniCode> en SQL
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header="Reference field">
      {INFO}
      {SIMILAR}
    </TypeInfo>
  )
}
