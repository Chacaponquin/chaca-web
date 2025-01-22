import { A, MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"

export default function ModuleValueInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Returns a value from a module in <MiniCode>Chaca</MiniCode>.{" "}
          <A to={OVERVIEW.redirect}>Read about Chaca modules</A>
        </P>
      ),
      es: (
        <P>
          Retorna el valor de uno de los módulos de <MiniCode>Chaca</MiniCode>.{" "}
          <A to={OVERVIEW.redirect}>Leer sobre los módulos de Chaca</A>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header={{ en: "Module value field", es: "Campo módulo" }}>
      {INFO}
    </TypeInfo>
  )
}
