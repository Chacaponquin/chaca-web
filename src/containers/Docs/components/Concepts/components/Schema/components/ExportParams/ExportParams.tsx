import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function ExportParams() {
  const params: Param[] = [
    {
      name: "documents",
      description: "Cantidad de documentos a generar",
      params: [],
      required: true,
      types: [COMMON_TYPES.NUMBER],
    },
    {
      name: "config",
      description: "Opciones para exportar el archivo",
      params: [
        {
          name: "filename",
          description: "Nombre del archivo a exportar",
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "location",
          params: [],
          required: true,
          description: "Carpeta de destino",
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "format",
          description: "Configuración del formato de archivo",
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
      ],
      types: ["FileConfig"],
      required: true,
    },
  ]

  return <Params params={params} />
}
