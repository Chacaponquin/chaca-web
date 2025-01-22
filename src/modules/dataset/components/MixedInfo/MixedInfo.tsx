import { A, MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function MixedInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Returns an object with fields that can be configured in the same way as a{" "}
          <MiniCode>schema</MiniCode>. <A to={SCHEMA.nestedSchemaUrl}>Read about nested schemas</A>
        </P>
      ),
      es: (
        <P>
          Retorna un objeto con campos que pueden configurarse de la misma forma que un{" "}
          <MiniCode>schema</MiniCode>.{" "}
          <A to={SCHEMA.nestedSchemaUrl}>Leer sobre schemas anidados</A>
        </P>
      ),
    },
  })

  return (
    <TypeInfo type="default" header={{ en: "Nested schema", es: "Schema anidado" }}>
      {INFO}
    </TypeInfo>
  )
}
