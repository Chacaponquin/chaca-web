import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function MixedInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Returns an object with fields that can be configured in the same way as a{" "}
          <MiniCode>Schema</MiniCode>
        </P>
      ),
      es: (
        <P>
          Retorna un objeto con campos que pueden configurarse de la misma forma que un{" "}
          <MiniCode>Schema</MiniCode>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header="Object field">
      {INFO}
    </TypeInfo>
  )
}
