import { Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function ExportParams() {
  const params: Param[] = [
    {
      name: "config",
      description: {
        es: "Configuración del archivo a exportar",
        en: "Generated file configuration",
      },
      params: [
        {
          name: "filename",
          description: {
            es: <>Nombre del archivo a exportar</>,
            en: <>Name of the file to export</>,
          },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "format",
          description: {
            es: "Formato de los archivos a exportar",
            en: "Format of files to export",
          },
          params: [],
          required: true,
          types: ["ExportFormat"],
        },
        {
          name: "location",
          description: {
            es: "Carpeta de destino de los archivos a exportar",
            en: "Destination folder for export files",
          },
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "verbose",
          required: false,
          default: "false",
          params: [],
          description: {
            es: "Mostrar en consola el progreso de creación del dataset",
            en: "Show dataset creation progress in console",
          },
          types: [COMMON_TYPES.BOOLEAN],
        },
      ],
      required: true,
      types: ["FileConfig"],
    },
  ]

  return <Params params={params} />
}
