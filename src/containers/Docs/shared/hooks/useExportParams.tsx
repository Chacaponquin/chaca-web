import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

const DUMP_CONFIG_PARAM: Param = {
  name: "config",
  description: { es: "Opciones para exportar el archivo", en: "Export file options" },
  params: [
    {
      name: "filename",
      description: {
        es: "Nombre que tendrá el archivo a generar. Solo se tendrá en cuenta en caso de que se genere un solo archivo",
        en: "Name of the file to be generated. It will only be taken if a single file is generated.",
      },
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "format",
      description: { es: "Configuración del formato de archivo", en: "File format settings" },
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
  description: { es: "Opciones para exportar el archivo", en: "Options for exporting the file" },
  params: [
    {
      name: "filename",
      description: {
        es: (
          <>
            Nombre del archivo a exportar. Solo se tendrá en cuenta si es generado solamente un
            archivo
          </>
        ),
        en: <>Name of the file to export. This will only be taken if only one file is generated</>,
      },
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "location",
      params: [],
      required: true,
      description: { es: "Carpeta de destino", en: "Destination folder" },
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "format",
      description: { es: "Configuración del formato de archivo", en: "File format configuration" },
      params: [],
      required: true,
      types: EXPORT_FORMATS,
    },
  ],
  types: ["FileConfig"],
  required: true,
}

export default function useExportParams() {
  return { FILE_CONFIG_PARAM, DUMP_CONFIG_PARAM }
}
