import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Danger,
  Info,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, FieldsList, Params } from "../components"
import { POSTGRES } from "@modules/docs/domain/core/sections/export"
import { REF } from "@modules/docs/domain/core/sections/field-types"

export default function En() {
  return (
    <>
      <P>
        Key fields declare the defined field as one of the keys{" "}
        <Link to={SCHEMA.redirect}>schema</Link> (similar to a <MiniCode>PRIMARY KEY</MiniCode> in
        SQL). Not all fields can be declared as key fields, only the next ones can be declared this
        way:
      </P>

      <FieldsList />

      <Info>
        <P>
          These fields do not suffer any alteration in the generated value, they only have the
          function of indicating which fields can be referenced.
        </P>
      </Info>

      <Definition />

      <Params />

      <Danger title="Null values">
        <P>
          If this field type returns a <MiniCode>null</MiniCode> value, an exception will be thrown.
        </P>
      </Danger>

      <Tip title="Export to Postgresql">
        <P>
          If you export the data generated from the <Link to={SCHEMA.redirect}>schema</Link> in{" "}
          <Link to={POSTGRES.redirect}>Postgresql</Link> format, these fields will be reflected in
          the definition of the tables as <MiniCode>PRIMARY KEY</MiniCode>.
        </P>
      </Tip>

      <Info>
        <P>
          Key fields are the only ones that can be referenced by a{" "}
          <Link to={REF.redirect}>reference field</Link> from another{" "}
          <Link to={SCHEMA.redirect}>schema</Link>.
        </P>
      </Info>

      <Info>
        <P>
          These fields cannot be set with the parameters <MiniCode>isArray</MiniCode> and{" "}
          <MiniCode>possibleNull</MiniCode>
        </P>
      </Info>
    </>
  )
}
