import { Link, P } from "@markdown/components/Markdown/components"
import { Definition, Example, SequenceParams } from "./components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function Sequence() {
  return (
    <>
      <P>
        Este campo genera para el campo definido un número que irá en incremento en cada iteración.
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
