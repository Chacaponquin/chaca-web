import { A, MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { REF } from "@modules/docs/domain/core/sections/field-types"

export default function RefInfo() {
  const { INFO, SIMILAR } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          References a <MiniCode>key</MiniCode> field from another <MiniCode>schema</MiniCode> and
          gets the value of that field in any generated documents.{" "}
          <A to={REF.redirect}>Read about ref fields</A>
        </P>
      ),
      es: (
        <P>
          Referencia a un campo <MiniCode>key</MiniCode> de otro <MiniCode>schema</MiniCode> y
          obtiene el valor de ese campo en cualquiera de los documentos generados.{" "}
          <A to={REF.redirect}>Leer sobre campos referencias</A>
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
    <TypeInfo type="default" header={{ en: "Reference field", es: "campo referencia" }}>
      {INFO}
      {SIMILAR}
    </TypeInfo>
  )
}
