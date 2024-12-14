import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ApiRoute, Example, QueryParams, Try } from "../components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import { BODY, EXAMPLE, PARAMS } from "@modules/docs/domain/core/sections/api/module-value"

export default function En() {
  return (
    <>
      <ApiRoute />

      <P>
        This route allows generating values from the <Link to={OVERVIEW.redirect}>modules</Link>{" "}
        predefined in the library. The generated value can be modified through parameters that are
        received in the <MiniCode>body</MiniCode> of the request.
      </P>

      <H2 title={PARAMS} />

      <QueryParams />

      <H2 title={BODY} />

      <P>
        Each <Link to={OVERVIEW.redirect}>module</Link> may or may not have parameters that can
        modify the value to be generated. These parameters are received as an object that is sent
        through the <MiniCode>body</MiniCode> of the <MiniCode>POST</MiniCode> request.
      </P>

      <H2 title={EXAMPLE} />

      <P>
        For this example, different ways to generate a value from the{" "}
        <Link to={OVERVIEW.redirect}>module</Link> <MiniCode>internet.email</MiniCode> will be
        shown.
      </P>

      <Example />

      <Try />
    </>
  )
}
