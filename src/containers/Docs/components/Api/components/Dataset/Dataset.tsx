import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Route } from "../../shared/components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { BODY, EXAMPLE } from "@modules/docs/domain/core/sections/api/dataset"
import { Example, Params, Try } from "./components"

export default function Dataset() {
  return (
    <>
      <Route method="post" url="dataset" />

      <P>
        Esta ruta permite generar datos de un <Link to={DATASET.redirect}>dataset</Link> definido en
        el <MiniCode>body</MiniCode> de la petición.
      </P>

      <H2 title={BODY} />

      <P>
        El cuerpo de la petición debe ser un objeto donde en cada propiedad se define el{" "}
        <Link to={SCHEMA.redirect}>schema</Link> y la cantidad de documentos a generar. De cada{" "}
        <Link to={SCHEMA.redirect}>schema</Link> se definen los siguientes parámetros.
      </P>

      <Params />

      <H2 title={EXAMPLE} />

      <P>
        En el siguiente ejemplo se muestra como se generaría un{" "}
        <Link to={DATASET.redirect}>dataset</Link> que contiene los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> <MiniCode>User</MiniCode> y{" "}
        <MiniCode>Product</MiniCode>
      </P>

      <Example />

      <Try />
    </>
  )
}
