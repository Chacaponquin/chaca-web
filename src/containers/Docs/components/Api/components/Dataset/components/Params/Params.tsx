import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

const params: Param[] = [
  {
    name: "schema",
    description: {
      es: (
        <>
          Los campos del <Link to={SCHEMA.redirect}>schema</Link> se definen de la misma forma que
          al definir el cuerpo la ruta <Link to={SCHEMA_OBJECT.bodyUrl}>api/schema</Link>
        </>
      ),
      en: (
        <>
          The <Link to={SCHEMA.redirect}>schema</Link> fields are defined in the same way as the{" "}
          <Link to={SCHEMA_OBJECT.bodyUrl}>api/schema</Link> route body
        </>
      ),
    },
    params: [],
    required: true,
    types: [],
  },
  {
    name: "count",
    description: { es: "Cantidad de documentos a generar", en: "Count of documents to generate" },
    required: true,
    types: [COMMON_TYPES.NUMBER],
    params: [],
  },
]

export default function HttpParams() {
  return <Params params={params} />
}
