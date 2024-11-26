import { Danger, Link, MiniCode, P } from "@markdown/components/Markdown/components"
import { Definition, Example, SeqParams } from "./components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function Sequential() {
  return (
    <>
      <P>
        Para contextos donde se conoce el valor que debe tener un campo en cada documento a generar
        se utiliza el método <MiniCode>sequential</MiniCode> para asignar de forma secuencial un
        arreglo de valores a cada documento.
      </P>

      <Definition />

      <SeqParams />

      <Danger title="Valores insuficientes">
        <P>
          Si el parámetro <MiniCode>loop</MiniCode> se encuentra en <MiniCode>false</MiniCode> y se
          pasa como argumento un arreglo de valores con una longitud menor a la cantidad de
          documentos a generar se lanzará la excepción{" "}
          <MiniCode>EmptySequentialValuesError</MiniCode>.
        </P>
      </Danger>

      <P>
        Un caso de uso para estos campos es para la hora de crear{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> que almacenan valores enumerados. Por ejemplo, En
        el contexto de un Ecommerce podrían ser las tallas de camisetas.
      </P>

      <Example />
    </>
  )
}
