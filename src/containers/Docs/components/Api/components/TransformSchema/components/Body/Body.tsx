import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function Body() {
  const { FILENAME_PARAM, FORMAT_PARAM } = useParams()

  const params: Param[] = [
    FILENAME_PARAM,
    FORMAT_PARAM,
    {
      name: "schema",
      required: true,
      description: (
        <>
          Objeto con la definición del <Link to={SCHEMA.redirect}>dataset</Link>. Se define de la
          misma forma que el cuerpo de la ruta <Link to={SCHEMA_OBJECT.bodyUrl}>api/schema</Link>
        </>
      ),
      params: [],
      types: [],
    },
  ]

  return <Params params={params} />
}
