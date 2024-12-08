import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function useExportParams() {
  const DUMP_CONFIG_PARAM: Param = {
    name: "config",
    description: "Opciones para exportar el archivo",
    params: [
      {
        name: "filename",
        description:
          "Nombre que tendrá el archivo a generar. Solo se tendrá en cuenta en caso de que se genere un solo archivo",
        params: [],
        required: true,
        types: [COMMON_TYPES.STRING],
      },
      {
        name: "format",
        description: "Configuración del formato de archivo",
        params: [],
        required: true,
        types: EXPORT_FORMATS,
      },
    ],
    types: ["DumpConfig"],
    required: true,
  }

  const FILE_CONFIG_PARAM: Param = {
    name: "config",
    description: "Opciones para exportar el archivo",
    params: [
      {
        name: "filename",
        description: (
          <>
            Nombre del archivo a exportar. Solo se tendrá en cuenta si es generado solamente un
            archivo
          </>
        ),
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
        types: EXPORT_FORMATS,
      },
    ],
    types: ["FileConfig"],
    required: true,
  }

  return { FILE_CONFIG_PARAM, DUMP_CONFIG_PARAM }
}
