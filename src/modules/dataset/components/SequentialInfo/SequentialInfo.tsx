import { MiniCode, P } from "@modules/modal/components/Info/components"
import TypeInfo from "../TypeInfo/TypeInfo"
import { useTranslation, useTranslationComponent } from "@modules/app/modules/language/hooks"

export default function SequentialInfo() {
  const { DANGER_HEADER } = useTranslation({
    DANGER_HEADER: { en: "Values count", es: "Cantidad de valores" },
  })

  const { INFO, DELETE_RESTRICTION, LIMIT_COUNT } = useTranslationComponent({
    INFO: {
      en: (
        <P>
          Assigns each of the defined values sequentially to each <MiniCode>Schema</MiniCode>
          document
        </P>
      ),
      es: (
        <P>
          Asigna cada uno de los valores definidos de forma secuencial para cada documento del{" "}
          <MiniCode>Schema</MiniCode>
        </P>
      ),
    },

    DELETE_RESTRICTION: {
      en: (
        <P>
          If you want to eliminate this restriction, you can activate <MiniCode>loop</MiniCode> so
          that when the defined values run out, the process starts with the first value again
        </P>
      ),
      es: (
        <P>
          Si se desea eliminar esta restricción se puede activar <MiniCode>loop</MiniCode> para que
          al acabarse los valores definidos se empiece por el primero nuevamente
        </P>
      ),
    },

    LIMIT_COUNT: {
      en: (
        <P>
          The number of defined values must be equal to or greater than the number of documents to
          be generated from the <MiniCode>Schema</MiniCode>
        </P>
      ),
      es: (
        <P>
          La cantidad de valores definidos debe ser igual o mayor a la cantidad de documentos a
          generar del <MiniCode>Schema</MiniCode>
        </P>
      ),
    },
  })

  return (
    <div className="flex flex-col items-center">
      <TypeInfo type="default" header="Sequential field">
        {INFO}
      </TypeInfo>

      <TypeInfo type="danger" header={DANGER_HEADER}>
        {LIMIT_COUNT}
        {DELETE_RESTRICTION}
      </TypeInfo>
    </div>
  )
}
