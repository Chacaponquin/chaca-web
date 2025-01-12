import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function DatasetParams() {
  const params: Param[] = [
    {
      name: "schemas",
      description: {
        es: "Configuración de todos los schemas del dataset",
        en: "Dataset schemas configuration",
      },
      params: [
        {
          name: "name",
          description: {
            en: "Schema name inside the dataset",
            es: "Nombre del schema dentro del dataset",
          },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "schema",
          description: { es: "Definición del schema", en: "Schema definition" },
          params: [],
          required: true,
          types: ["Schema"],
        },
        {
          name: "documents",
          description: {
            es: "Cantidad de documentos a generar",
            en: "Count of documents to generate",
          },
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
