import { Content } from "@containers/Docs/shared/components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Info,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, FieldsList, Params } from "./components"
import { POSTGRES } from "@modules/docs/domain/core/sections/export"
import { REF } from "@modules/docs/domain/core/sections/field-types"

export default function Key() {
  return (
    <Content>
      <P>
        Los campos llave declaran al campo definido como una de las llaves del{" "}
        <Link to={SCHEMA.redirect}>schema</Link> (similar a una <MiniCode>PRIMARY KEY</MiniCode> en
        SQL). No todos los campos pueden ser declarados como campos llave, solo pueden ser
        declarados de esta forma los siguientes:
      </P>

      <FieldsList />

      <Info>
        <P>
          Estos campos no sufren ninguna alteración en el valor generado, solo tienen la función de
          indicar qué campos pueden ser referenciados.
        </P>
      </Info>

      <Definition />

      <Params />

      <Tip title="Exportar a Postgresql">
        <P>
          En caso de exportar los datos generados del <Link to={SCHEMA.redirect}>schema</Link> en
          formato <Link to={POSTGRES.redirect}>Postgresql</Link>, estos campos se verán reflejados
          en la definición de las tablas como <MiniCode>PRIMARY KEY</MiniCode>.
        </P>
      </Tip>

      <Info>
        <P>
          Los campos llave son los únicos que pueden ser referenciados por un{" "}
          <Link to={REF.redirect}>campo referencia</Link> proveniente de otro{" "}
          <Link to={SCHEMA.redirect}>schema</Link>.
        </P>
      </Info>

      <Info>
        <P>
          Estos campos no pueden ser configurados con los parámetros <MiniCode>isArray</MiniCode> y{" "}
          <MiniCode>possibleNull</MiniCode>
        </P>
      </Info>
    </Content>
  )
}
