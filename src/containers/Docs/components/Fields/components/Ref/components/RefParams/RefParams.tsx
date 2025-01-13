import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function RefParams() {
  const where = "RefFieldWhere = (props: RefFieldWhereProps) => boolean"

  const params: Param[] = [
    {
      name: "field",
      description: { es: "Ruta del campo a referenciar", en: "Reference field route" },
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "config",
      description: {
        es: "Configuración para la búsqueda del campo referenciado",
        en: "Configuration for searching the referenced field",
      },
      params: [
        {
          name: "unique",
          description: {
            es: "El valor escogido no puede ser escogido por más de 1 documento",
            en: "The chosen value cannot be chosen by more than 1 document",
          },
          required: false,
          params: [],
          types: [COMMON_TYPES.BOOLEAN],
        },
        {
          name: "where",
          description: {
            es: "Función para filtrar los documentos del schema referenciado. Se ejecuta para cada documento del schema referenciado",
            en: "Function to filter the documents of the referenced schema. It is executed for each document of the referenced schema",
          },
          params: [],
          required: false,
          types: [where],
        },
        {
          name: "nullOnEmpty",
          description: {
            es: (
              <>
                Se devolverá <MiniCode size="sm">null</MiniCode> como resultado en caso de que no
                existan documentos a referenciar. En caso de que sea definido como{" "}
                <MiniCode size="sm">false</MiniCode> al no existir posibles referencias se lanzará
                la excepción <MiniCode size="sm">NotEnoughValuesForRefError</MiniCode>
              </>
            ),
            en: (
              <>
                <MiniCode size="sm">null</MiniCode> will be returned if there are no documents to
                reference. If it is defined as <MiniCode size="sm">false</MiniCode> if there are no
                possible references, the exception{" "}
                <MiniCode size="sm">NotEnoughValuesForRefError</MiniCode> will be thrown
              </>
            ),
          },
          params: [],
          required: false,
          default: "false",
          types: [],
        },
      ],
      required: false,
      types: ["RefFieldConfig"],
    },
  ]

  return <Params params={params} />
}
