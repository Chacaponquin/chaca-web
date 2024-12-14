import {
  H2,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Route } from "../../../shared/components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { BODY, EXAMPLE } from "@modules/docs/domain/core/sections/api/dataset"
import { Example, Params, Try } from "../components"

export default function En() {
  return (
    <>
      <Route method="post" url="dataset" />

      <P>
        This route allows you to generate data from a <Link to={DATASET.redirect}>dataset</Link>{" "}
        defined in the <MiniCode>body</MiniCode> of the request.
      </P>

      <H2 title={BODY} />

      <P>
        The request body must be an object where each property defines the{" "}
        <Link to={SCHEMA.redirect}>schema</Link> and the number of documents to be generated. The
        following parameters are defined for each <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Tip title="Schema names">
        <P>
          The name of each <Link to={DATASET.redirect}>dataset</Link> will be the value of the
          property where it was declared.
        </P>
      </Tip>

      <Params />

      <H2 title={EXAMPLE} />

      <P>
        The following example shows how generate a <Link to={DATASET.redirect}>dataset</Link>{" "}
        containing the <Link to={SCHEMA.redirect}>schemas</Link> <MiniCode>User</MiniCode> and{" "}
        <MiniCode>Product</MiniCode>
      </P>

      <Example />

      <Try />
    </>
  )
}
