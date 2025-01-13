import { DATASET } from "@modules/docs/domain/core/sections/concepts"
import { Link, Strong } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useParams() {
  const EXPORT_PARAMS: Param[] = [
    {
      name: "config",
      description: {
        es: "Ubicación del archivo de configuración",
        en: "Configuration file location",
      },
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
      alias: "c",
    },
    {
      name: "filename",
      description: { es: "Nombre del archivo a generar", en: "Name of the file to generate" },
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
      default: "'data'",
      alias: "n",
    },
    {
      name: "output",
      description: {
        es: "Ruta de la carpeta donde se ubicarán los archivos creados",
        en: "Path of the folder where the created files will be located",
      },
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
      default: "''",
      alias: "o",
    },
    {
      name: "count",
      description: {
        es: (
          <>
            Cantidad de documentos a generar.{" "}
            <Strong>
              En caso de que se exporte un <Link to={DATASET.redirect}>dataset</Link> este paámetro
              no se tendrá en cuenta
            </Strong>
          </>
        ),
        en: (
          <>
            Count of documents to generate.{" "}
            <Strong>
              If a <Link to={DATASET.redirect}>dataset</Link> is exported, this parameter will not
              be taken
            </Strong>
          </>
        ),
      },
      params: [],
      required: false,
      default: "50",
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return { EXPORT_PARAMS }
}
