import {
  H2,
  Info,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ApiRoute, Example, QueryParams, Try } from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { PARAMS, BODY, EXAMPLE } from "@modules/docs/domain/core/sections/api/schema-array"
import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"

export default function En() {
  return (
    <>
      <ApiRoute />

      <P>
        This route allows you to create an array of documents by defining a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> on the request <MiniCode>body</MiniCode> and
        specifying the number of documents with the <MiniCode>count</MiniCode> parameter.
      </P>

      <H2 title={PARAMS} />

      <QueryParams />

      <Info>
        <P>
          The number of documents to be generated cannot exceed <MiniCode>1000</MiniCode>.
        </P>
      </Info>

      <H2 title={BODY} />

      <P>
        The <Link to={SCHEMA.redirect}>schema</Link> through which the documents will be generated
        must be defined on the request body.
      </P>

      <Info>
        <P>
          The definition of a <Link to={SCHEMA.redirect}>schema</Link> and its fields for this route
          maintains the rules that were explained in the route{" "}
          <Link to={SCHEMA_OBJECT.bodyUrl}>/schema</Link>.
        </P>
      </Info>

      <H2 title={EXAMPLE} />

      <P>
        The following example will show how <MiniCode>10</MiniCode> documents can be generated from
        the <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode>.
      </P>

      <Example />

      <Try />
    </>
  )
}
