import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { DATASET } from "@modules/docs/domain/core/sections/api"
import { DATASET as DATASET_CONCEPT } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"

export default function Body() {
  const { FILENAME_PARAM, FORMAT_PARAM } = useParams()

  const params: Param[] = [
    FILENAME_PARAM,
    FORMAT_PARAM,
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
