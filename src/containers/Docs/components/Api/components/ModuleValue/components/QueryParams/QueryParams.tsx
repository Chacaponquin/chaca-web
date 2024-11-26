import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import { Link, Params } from "@markdown/components/Markdown/components"
import { Param } from "@markdown/components/Markdown/components/Params/domain"
import { COMMON_TYPES } from "@markdown/domain/constants"

export default function QueryParams() {
  const params: Param[] = [
    {
      name: "section",
      description: (
        <>
          <Link to={OVERVIEW.apiIdUrl}>Api id</Link> de la sección en la que se encuentra el{" "}
          <Link to={OVERVIEW.redirect}>módulo</Link> a elegir
        </>
      ),
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
    {
      name: "module",
      description: (
        <>
          <Link to={OVERVIEW.apiIdUrl}>Api id</Link> del <Link to={OVERVIEW.redirect}>módulo</Link>{" "}
          del cual se generará el valor
        </>
      ),
      params: [],
      required: true,
      types: [COMMON_TYPES.STRING],
    },
  ]

  return <Params params={params} />
}
