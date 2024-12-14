import { EXAMPLE, PARAMS, BODY } from "@modules/docs/domain/core/sections/api/transform-schema"
import { H2, Link, MiniCode, P } from "@markdown/components/Markdown/components"
import { ApiRoute, Body, Example, QueryParams, Try } from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function Es() {
  return (
    <>
      <ApiRoute />

      <H2 title={PARAMS} />

      <QueryParams />

      <H2 title={BODY} />

      <P>En el cuerpo de la petición se deben definir los siguientes parámetros</P>

      <Body />

      <H2 title={EXAMPLE} />

      <P>
        En el siguiente ejemplo se muestra la creación y transpilación de datos generados por el{" "}
        <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode> a formato{" "}
        <MiniCode>json</MiniCode>.
      </P>

      <Example />

      <Try />
    </>
  )
}
