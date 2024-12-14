import { Link, P } from "@markdown/components/Markdown/components"
import { Definition, Example, SequenceParams } from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function Es() {
  return (
    <>
      <P>
        Este campo genera un número que irá en incremento en cada iteración de la generación del{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Definition />

      <SequenceParams />

      <P>
        El caso de uso más simple para este tipo de campos es asignar identificadores secuenciales a
        un <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Example />
    </>
  )
}
