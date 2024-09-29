import {
  H2,
  Info,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Route } from "../../shared/components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Example, QueryParams, Try } from "./components"
import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"

export default function SchemaArray() {
  return (
    <>
      <Route method="post" url="api/schema/{count}" />

      <P>
        Esta ruta permite crear un arreglo de documentos al definir un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> en el <MiniCode>body</MiniCode> de la petición y
        especificando la cantidad de documentos con el parámetro <MiniCode>count</MiniCode>.
      </P>

      <H2>Parámetros</H2>

      <QueryParams />

      <H2>Body</H2>

      <P>
        En el cuerpo de esta petición debe definirse el <Link to={SCHEMA.redirect}>schema</Link> a
        través del cual se generarán los documentos.
      </P>

      <Info>
        <P>
          La definición de un <Link to={SCHEMA.redirect}>schema</Link> y sus campos para esta ruta
          mantiene las reglas que fueron explicadas en la ruta{" "}
          <Link to={SCHEMA_OBJECT.buildUrl(SCHEMA_OBJECT.bodyId)}>/schema</Link>.
        </P>
      </Info>

      <H2>Example</H2>

      <P>
        En el siguiente ejemplo se expondrá como pueden generarse <MiniCode>10</MiniCode> documentos
        del <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode>.
      </P>

      <Example />

      <Try />
    </>
  )
}
