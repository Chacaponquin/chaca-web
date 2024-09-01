import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslation, useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function CustomInfo() {
  const { INFO, WARNING_HEADER } = useTranslation({
    INFO: {
      en: "Executes a function written in Javascript. This must return a value that will be assigned to this field in the document that is being generated",
      es: "Ejecuta una función escrita en Javascript. Esta debe retornar un valor que se le asignará a este campo en el documento que se está generando",
    },
    WARNING_HEADER: { en: "Undefined values", es: "Valores undefined" },
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
      <TypeInfo type="default" header="Custom field">
        <P>{INFO}</P>
      </TypeInfo>

      <TypeInfo type="warning" header={WARNING_HEADER}>
        {WARNING}
      </TypeInfo>
    </div>
  )
}
