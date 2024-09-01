import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function ModuleValueInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Returns the value of one of the predefined functions in <MiniCode>Chaca</MiniCode>
        </P>
      ),
      es: (
        <P>
          Retorna el valor de una de las funciones predefinidas en <MiniCode>Chaca</MiniCode>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header="Module value field">
      {INFO}
    </TypeInfo>
  )
}
