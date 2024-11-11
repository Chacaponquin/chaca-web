import { Link, MiniCode, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  CamelCase,
  CapitalCase,
  DotCase,
  Multiple,
  OneOfArray,
  PascalCase,
  Pick,
  ReplaceSymbols,
  SentenceCase,
  SnakeCase,
  SumDateRange,
} from "./components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"

export default function Utils() {
  return (
    <>
      <P>
        Chaca provee algunas de las functiones que son utilizadas para generar los valores en los{" "}
        <Link to={OVERVIEW.redirect}>módulos</Link>. Para utilizarlas solo es necesario acceder a la
        propiedad <MiniCode>chaca.utils</MiniCode> donde se encuentran los siguientes métodos.
      </P>

      <OneOfArray />
      <SumDateRange />
      <ReplaceSymbols />
      <CamelCase />
      <CapitalCase />
      <DotCase />
      <PascalCase />
      <SentenceCase />
      <SnakeCase />
      <Pick />
      <Multiple />
    </>
  )
}
