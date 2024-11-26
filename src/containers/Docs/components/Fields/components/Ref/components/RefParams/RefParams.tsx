import { MiniCode, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function RefParams() {
  const where = "RefFieldWhere = (props: RefFieldWhereProps) => boolean"

  const params: Param[] = [
    {
      name: "field",
      description: "Ruta del campo a referenciar",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "config",
      description: "Configuración para la búsqueda del campo referenciado",
      params: [
        {
          name: "unique",
          description: "Indica si el valor escogido no puede ser escogido por más de 1 documento",
          required: false,
          params: [],
          types: [COMMON_TYPES.BOOLEAN],
        },
        {
          name: "where",
          description:
            "Función para filtrar los documentos del schema referenciado. Se ejecuta para cada documento del schema referenciado",
          params: [],
          required: false,
          types: [where],
        },
        {
          name: "nullOnEmpty",
          description: (
            <>
              Se devolverá <MiniCode size="sm">null</MiniCode> como resultado en caso de que no
              existan documentos a referenciar. En caso de que sea definido como{" "}
              <MiniCode size="sm">false</MiniCode> al no existir posibles referencias se lanzará la
              excepción <MiniCode size="sm">NotEnoughValuesForRefError</MiniCode>
            </>
          ),
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
