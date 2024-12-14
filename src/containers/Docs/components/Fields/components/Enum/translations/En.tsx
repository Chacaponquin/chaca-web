import {
  Danger,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ArrayEnum, Definition, EnumParams, Example } from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { PICK } from "@modules/docs/domain/core/sections/field-types"

export default function En() {
  return (
    <>
      <P>
        If a field value has a limited number of values that it can take, you can use the{" "}
        <MiniCode>enum</MiniCode> field to define this field type. It receives an array with all the
        values that the field can take in each document.
      </P>

      <Definition />

      <EnumParams />

      <P>
        For example, a ticket status, unlike other values such as the title or description, is a
        field that has a limited number of values that it can assume. For the case presented below,
        this field will be defined on a <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>Ticket</MiniCode> where it can assume the values: <MiniCode>Open</MiniCode>,{" "}
        <MiniCode>In progress</MiniCode>, <MiniCode>Pending</MiniCode>, <MiniCode>On hold</MiniCode>
        , <MiniCode>Resolved</MiniCode>, <MiniCode>Closed</MiniCode>.
      </P>

      <Example />

      <Danger title="Empty array">
        <P>
          If an empty array is passed as a parameter to the <MiniCode>enum</MiniCode> method, an
          exception will be thrown.
        </P>
      </Danger>

      <Tip title="Repeated values">
        <P>
          If you convert an enum field into a field that returns an array of defined values, you
          must take into account that there may be repeated values within the generated array.
        </P>

        <ArrayEnum />

        <P>
          As you can see in the example, the result has an array where the value{" "}
          <MiniCode>Animation</MiniCode> is repeated. If you want to avoid this situation, it is
          advisable to use a <Link to={PICK.redirect}>pick field</Link>.
        </P>
      </Tip>
    </>
  )
}
