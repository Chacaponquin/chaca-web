import { useParams } from "@containers/Docs/components/Api/shared/hooks"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import {
  Link,
  MiniCode,
  Params,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@modules/shared/modules/markdown/domain/constants"

export default function ModuleParams() {
  const { TYPE, COMMON_PARAMS } = useParams()

  const params: Param[] = [
    TYPE("module"),
    {
      name: "module",
      description: (
        <>
          Módulo de Chaca que será utilizado para generar el valor del campo en cada documento. Esta
          definición está compuesta por las{" "}
          <Link to={OVERVIEW.buildUrl(OVERVIEW.apiIdId)}>api id</Link> de la sección y del módulo
          separadas por un <MiniCode size="xs">.</MiniCode>. Por ejemplo:{" "}
          <MiniCode size="xs">internet.username</MiniCode>
        </>
      ),
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    ...COMMON_PARAMS,
  ]

  return <Params params={params} />
}
