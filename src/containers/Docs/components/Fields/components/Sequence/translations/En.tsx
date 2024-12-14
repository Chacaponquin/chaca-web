import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, Example, SequenceParams } from "../components"

export default function En() {
  return (
    <>
      <P>
        This field generates a number that will increment on each iteration of the schema generation{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Definition />

      <SequenceParams />

      <P>
        The simplest use case for this field type is to assign sequential identifiers to a{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Example />
    </>
  )
}
