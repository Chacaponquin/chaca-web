import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function HttpParams() {
  const params: Param[] = [
    {
      name: "schema",
      description: (
        <>
          Los campos del <Link to={SCHEMA.redirect}>schema</Link> se definen de la misma forma que
          al definir el cuerpo la ruta <Link to={SCHEMA_OBJECT.bodyUrl}>api/schema</Link>
        </>
      ),
      params: [],
      required: true,
      types: [],
    },
    {
      name: "count",
      description: "Cantidad de documentos a generar",
      required: true,
      types: [COMMON_TYPES.NUMBER],
      params: [],
    },
  ]

  return <Params params={params} />
}
