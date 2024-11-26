import { DATASET } from "@modules/docs/domain/core/sections/concepts"
import { Link, Strong } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function useParams() {
  const EXPORT_PARAMS: Param[] = [
    {
      name: "config",
      description: "Ubicación del archivo de configuración",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
      alias: "c",
    },
    {
      name: "filename",
      description: "Nombre del archivo a generar",
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
      default: "'data'",
      alias: "n",
    },
    {
      name: "output",
      description: "Ruta de la carpeta donde se ubicará el archivo creado",
      params: [],
      required: false,
      types: [COMMON_TYPES.STRING],
      default: "''",
      alias: "o",
    },
    {
      name: "count",
      description: (
        <>
          Cantidad de documentos a generar.{" "}
          <Strong>
            En caso de que se exporte un <Link to={DATASET.redirect}>dataset</Link> este paámetro no
            se tendrá en cuenta
          </Strong>
        </>
      ),
      params: [],
      required: false,
      default: "50",
      types: [COMMON_TYPES.NUMBER],
    },
  ]

  return { EXPORT_PARAMS }
}
