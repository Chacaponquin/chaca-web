import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

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
      ],
      required: false,
      types: ["RefFieldConfig"],
    },
  ]

  return <Params params={params} />
}
