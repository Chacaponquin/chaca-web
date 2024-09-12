import { Content } from "@containers/Docs/shared/components"
import {
  H2,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  ArrayFieldExample,
  ArrayLimitExample,
  ArrayLimitParams,
  Definition,
  ObjectParams,
} from "./components"
import { KEY } from "@modules/docs/domain/core/sections/field-types"

export default function SchemaField() {
  return (
    <Content>
      <P>
        Un campo dentro de un <MiniCode>Schema</MiniCode> puede ser definido de dos formas: una de
        forma simple y otra para modificar el valor a generar.
      </P>

      <Definition />

      <Tip title="Tipos de campo configurables">
        <P>
          No todos los tipos de campo pueden ser configurables. Revisa la documentación de los{" "}
          <Link to={KEY.redirect}>tipos de campos</Link> disponibles para saber cuales puedes
          configurar
        </P>
      </Tip>

      <H2>Parámetros</H2>

      <P>
        Todos los campos de un <MiniCode>Schema</MiniCode> pueden ser configurados para que el valor
        resultante en cada documento sea <MiniCode>null</MiniCode> o un arreglo de valores. Esto se
        puede hacer definiendo un objeto con los siguientes campos.
      </P>

      <ObjectParams />

      <H2>Campos que son arreglos</H2>

      <P>
        Los campos de un <MiniCode>Schema</MiniCode> pueden ser modificados para que devuelvan
        valores en forma de arreglo del <Link to={KEY.redirect}>tipo de campo</Link> definido.
      </P>

      <ArrayFieldExample />

      <P>
        Obviamente en los contextos reales los campos con valores en forma de arreglos varían en
        longitud dentro de cada documento. Esto se puede configurar definiendo{" "}
        <MiniCode>min</MiniCode> y <MiniCode>max</MiniCode>. Para cada documento se generará una
        longitud del arreglo que se encuentre entre los límites definidos.
      </P>

      <ArrayLimitParams />

      <ArrayLimitExample />
    </Content>
  )
}
