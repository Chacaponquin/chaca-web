import { A, MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslationComponent } from "@modules/app/modules/language/hooks"
import { CUSTOM } from "@modules/docs/domain/core/sections/field-types"

export default function CustomInfo() {
  const { INFO } = useTranslationComponent({
    INFO: {
      en: (
        <>
          Executes a Javascript function. This must return a value that will be assigned to this
          field in the document that is being generated.{" "}
          <A to={CUSTOM.redirect}>Read about custom fields</A>
        </>
      ),
      es: (
        <>
          Ejecuta una función de Javascript. Esta debe retornar un valor que se le asignará a este
          campo en el documento que se está generando.{" "}
          <A to={CUSTOM.redirect}>Leer sobre los campos custom</A>
        </>
      ),
    },
  })

  const { WARNING } = useTranslationComponent({
    WARNING: {
      en: (
        <P>
          In case the function returns <MiniCode>undefined</MiniCode> the field value in that
          document will be <MiniCode>null</MiniCode>
        </P>
      ),
      es: (
        <P>
          En caso de que la función retorne <MiniCode>undefined</MiniCode> el valor del campo en ese
          documento será <MiniCode>null</MiniCode>
        </P>
      ),
    },
  })

  return (
    <div className="flex flex-col gap-y-1">
      <TypeInfo type="default" header={{ en: "Custom field", es: "Campo custom" }}>
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo type="warning" header={{ en: "Undefined values", es: "Valores undefined" }}>
        {WARNING}
      </TypeInfo>
    </div>
  )
}
