import { Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"
import { Fragment } from "react"

export default function ExportParams() {
  const params: Param[] = [
    {
      name: "config",
      description: "Configuración del archivo a exportar",
      params: [
        {
          name: "filename",
          description: <Fragment>Nombre del archivo a exportar</Fragment>,
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "format",
          description: "Formato de los archivos a exportar",
          params: [],
          required: true,
          types: ["ExportFormat"],
        },
        {
          name: "location",
          description: "Carpeta de destino de los archivos a exportar",
          params: [],
          required: true,
          types: [COMMON_TYPES.STRING],
        },
        {
          name: "verbose",
          required: false,
          default: "false",
          params: [],
          description: "Mostrar en consola el progreso de creación del dataset",
          types: [COMMON_TYPES.BOOLEAN],
        },
      ],
      required: true,
      types: ["FileConfig"],
    },
  ]

  return <Params params={params} />
}
