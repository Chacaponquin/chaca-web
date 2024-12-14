import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ApiRoute, Body, Example, Structure, Try } from "../components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { BODY, EXAMPLE } from "@modules/docs/domain/core/sections/api/transform-dataset"

export default function En() {
  return (
    <>
      <ApiRoute />

      <P>
        This route allows you to transform data generated from a{" "}
        <Link to={DATASET.redirect}>dataset</Link> into any of the defined formats. This route
        returns an array with the information of each created file. Each object in the array would
        have the following structure.
      </P>

      <Structure />

      <H2 title={BODY} />

      <P>The following parameters must be defined on the request body.</P>

      <Body />

      <H2 title={EXAMPLE} />

      <P>
        The following example shows how a <Link to={DATASET.redirect}>dataset</Link> containing the{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> <MiniCode>User</MiniCode> and{" "}
        <MiniCode>Product</MiniCode> would be generated and then transpiled to{" "}
        <MiniCode>json</MiniCode> format.
      </P>

      <Example />

      <Try />
    </>
  )
}
