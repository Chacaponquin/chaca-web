import { useParams } from "@containers/Docs/components/Export/shared/hooks"
import { DATASET } from "@modules/docs/domain/core/sections/concepts"
import {
  Link,
  MiniCode,
  Params,
  Strong,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function JsonParams() {
  const { ZIP_PARAM, EXT } = useParams()

  const params: Param[] = [
    EXT("json"),
    ZIP_PARAM,
    {
      name: "separate",
      description: (
        <>
          Indica si se deben separar los resultados generados por un{" "}
          <Link to={DATASET.redirect}>dataset</Link> en archivos individuales.{" "}
          <Strong>
            Solo se aplicará si se utiliza el método <MiniCode>dataset.export</MiniCode>
          </Strong>
        </>
      ),
      params: [],
      required: false,
      types: [COMMON_TYPES.BOOLEAN],
      default: "false",
    },
  ]

  return <Params params={params} />
}
