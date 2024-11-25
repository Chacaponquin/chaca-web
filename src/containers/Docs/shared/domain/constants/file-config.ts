import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const DUMP_CONFIG_PARAM: Param = {
  name: "config",
  description: "Opciones para exportar el archivo",
  params: [
    {
      name: "filename",
      description: "Nombre que tendrá el archivo a generar",
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

export const FILE_CONFIG_PARAM: Param = {
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
      types: EXPORT_FORMATS,
    },
  ],
  types: ["FileConfig"],
  required: true,
}
