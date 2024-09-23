import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export const FILE_CONFIG_PARAM = {
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
}
