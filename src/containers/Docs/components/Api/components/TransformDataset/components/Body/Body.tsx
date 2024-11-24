import { EXPORT_FORMATS } from "@modules/docs/domain/constants/export-formats"
import { DATASET } from "@modules/docs/domain/core/sections/api"
import { DATASET as DATASET_CONCEPT } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function Body() {
  const params: Param[] = [
    {
      name: "filename",
      description: "Nombre del archivo a generar",
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "format",
      description: "Formato de archivo al que se transpilarán los datos generados",
      params: [],
      required: true,
      types: EXPORT_FORMATS,
    },
    {
      name: "dataset",
      description: (
        <>
          Objeto con la definición del <Link to={DATASET_CONCEPT.redirect}>dataset</Link>. Se define
          de la misma forma que el cuerpo de la ruta <Link to={DATASET.bodyUrl}>api/dataset</Link>
        </>
      ),
      params: [],
      required: true,
      types: [],
    },
  ]

  return <Params params={params} />
}
