import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function DatasetParams() {
  const params: Param[] = [
    {
      name: "schemas",
      description: "Configuración de todos los schemas del dataset",
      params: [
        {
          name: "name",
          description: "Nombre del schema dentro del dataset",
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "schema",
          description: "Definición del schema",
          params: [],
          required: true,
          types: ["Schema"],
        },
        {
          name: "documents",
          description: "Cantidad de documentos a generar",
          params: [],
          required: true,
          types: [COMMON_TYPES.NUMBER],
        },
      ],
      required: true,
      types: ["DatasetSchema[]"],
    },
  ]

  return <Params params={params} />
}
