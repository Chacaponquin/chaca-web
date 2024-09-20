import { Content } from "@containers/Docs/shared/components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, RefParams, WhereExample, WhereParams } from "./components"

export default function Ref() {
  return (
    <Content>
      <P>
        Para relacionar de forma directa dos <Link to={SCHEMA.redirect}>schemas</Link> dentro de un{" "}
        <Link to={DATASET.redirect}>dataset</Link> el campo referencia resulta la vía más útil. Este
        campo selecciona para cada documento del <Link to={SCHEMA.redirect}>schema</Link> uno de los
        valores del campo referenciado.
      </P>

      <Definition />

      <RefParams />

      <H2>Filtrar documentos referenciados</H2>

      <P>
        En ciertas ocasiones no todos los documentos del <Link to={SCHEMA.redirect}>schema</Link> a
        referenciar son válidos para ser escogidos. Para ello los campos <MiniCode>ref</MiniCode>{" "}
        pueden recibir una función que permite filtrar estos documentos utilizando sus campos
        generados y el estado actual del <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <WhereParams />

      <P>
        Por ejemplo, si se quiere seleccionar para el <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>Shop</MiniCode> solamente productos con cantidad mayor a <MiniCode>0</MiniCode>.
      </P>

      <WhereExample />
    </Content>
  )
}
