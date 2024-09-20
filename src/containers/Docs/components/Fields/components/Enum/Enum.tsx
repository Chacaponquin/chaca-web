import { Content } from "@containers/Docs/shared/components"
import {
  Danger,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { ArrayEnum, Definition, Example } from "./components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { PICK } from "@modules/docs/domain/core/sections/field-types"

export default function Enum() {
  return (
    <Content>
      <P>
        Si el un campo tiene una cantidad limitada de valores que puede asumir se puede utilizar el
        campo <MiniCode>enum</MiniCode> para definir este tipo de campos. Este recibe un arreglo con
        todos los valores que puede tomar el campo en cada documento.
      </P>

      <Definition />

      <P>
        Por ejemplo, el estado de un ticket, a diferencia de otros valores como el título o la
        descripción, es un campo que tiene una limitada cantidad de valores que puede asumir. Para
        el caso presentado a continuación se definirá este campo en un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Ticket</MiniCode> donde puede asumir los
        valores: <MiniCode>Open</MiniCode>, <MiniCode>In progess</MiniCode>,{" "}
        <MiniCode>Pending</MiniCode>, <MiniCode>On hold</MiniCode>, <MiniCode>Resolved</MiniCode>,{" "}
        <MiniCode>Closed</MiniCode>.
      </P>

      <Example />

      <Danger title="Arreglo vacío">
        <P>
          Si se pasa un arreglo vacío como parámetro del método <MiniCode>enum</MiniCode> se lanzará
          un excepción.
        </P>
      </Danger>

      <Tip title="Valores repetidos">
        <P>
          Si se convierte un campo enum en un campo que devuelva un arreglo de valores definidos hay
          que tener en cuenta de que pueden existir valores repetidos dentro del arreglo generado.
        </P>

        <ArrayEnum />

        <P>
          Como se puede ver en el ejemplo el resultado tiene un arreglo donde el valor{" "}
          <MiniCode>Animation</MiniCode> se repite. Si se quiere evitar esta situación es
          recomendable usar un <Link to={PICK.redirect}>campo pick</Link>.
        </P>
      </Tip>
    </Content>
  )
}
