import {
  Danger,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, Example, SeqParams } from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function En() {
  return (
    <>
      <P>
        For contexts where the value that a field should have in each document is known, the{" "}
        <MiniCode>sequential</MiniCode> method is used to sequentially assign an array of values to
        each document.
      </P>

      <Definition />

      <SeqParams />

      <Danger title="Insufficient values">
        <P>
          If the parameter <MiniCode>loop</MiniCode> is set to <MiniCode>false</MiniCode> and an
          array of values length less than the number of documents to be generated passed as an
          argument, the exception <MiniCode>EmptySequentialValuesError</MiniCode> will be thrown.
        </P>
      </Danger>

      <P>
        One use case for this field type is when creating <Link to={SCHEMA.redirect}>schemas</Link>{" "}
        that store enumerated values. For example, on a ecommerce context, this could be t-shirt
        sizes.
      </P>

      <Example />
    </>
  )
}
