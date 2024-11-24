import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Example, QueryParams, Try } from "./components"
import { Route } from "../../shared/components"
import { BODY, EXAMPLE, PARAMS } from "@modules/docs/domain/core/sections/api/module-value"

export default function ModuleValue() {
  return (
    <>
      <Route method="post" url="{section}/{module}" />

      <P>
        Esta ruta permite generar valores de los <Link to={OVERVIEW.redirect}>módulos</Link>{" "}
        predifinidos en la librería. El valor generado puede ser modificado a través de parámetros
        que son recibidos en el <MiniCode>body</MiniCode> de la petición.
      </P>

      <H2 title={PARAMS} />

      <QueryParams />

      <H2 title={BODY} />

      <P>
        Cada <Link to={OVERVIEW.redirect}>módulo</Link> puede tener (o no) parámetros que pueden
        modificar el valor a generar. Estos parámetros son recibidos en forma de un objeto que se
        envía a través del <MiniCode>body</MiniCode> de la petición <MiniCode>POST</MiniCode>.
      </P>

      <H2 title={EXAMPLE} />

      <P>
        Para este ejemplo se expondrán distintas formas para generar un valor del{" "}
        <Link to={OVERVIEW.redirect}>módulo</Link> <MiniCode>internet.email</MiniCode>.
      </P>

      <Example />

      <Try />
    </>
  )
}
