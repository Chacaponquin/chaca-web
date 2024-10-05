import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Danger,
  H2,
  Link,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { CurrentDefinition, GetDefinition, GetExample, GetParams } from "./components"
import {
  GET_CURRENT_SCHEMA_VALUES,
  GET_SCHEMA_VALUES,
} from "@modules/docs/domain/core/sections/concepts/store"
import { CUSTOM, REF } from "@modules/docs/domain/core/sections/field-types"

export default function DatasetStore() {
  return (
    <>
      <P>
        En ciertos un campo definido de un <Link to={SCHEMA.redirect}>schema</Link> necesita de
        información de otros <Link to={SCHEMA.redirect}>schemas</Link> dentro del{" "}
        <Link to={DATASET.redirect}>dataset</Link> en el que se encuentra para generar su valor.
        Para solucionar esta problemática los campos <Link to={CUSTOM.redirect}>custom</Link> y{" "}
        <Link to={REF.redirect}>referencia</Link> al igual que todas las configuraciones{" "}
        <MiniCode>isArray</MiniCode> y <MiniCode>possibleNull</MiniCode> reciben un parámetro{" "}
        <MiniCode>store</MiniCode> con el cual se puede interactuar con el resto de{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> que se encuentran en el{" "}
        <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <H2 title={GET_SCHEMA_VALUES} />

      <P>
        El método <MiniCode>get</MiniCode> permite obtener un arreglo de valores provenientes de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> definiendo el campo al que se quiere acceder.
      </P>

      <GetDefinition />

      <GetParams />

      <P>
        Por ejemplo, si se tiene un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>User</MiniCode> estas son algunas formas de obtener datos de este{" "}
        <Link to={SCHEMA.redirect}>schema</Link> desde otro que se encuentre en su mismo{" "}
        <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <GetExample />

      <Danger title="Acceder al propio schema">
        <P>
          Si se intenta acceder al <Link to={SCHEMA.redirect}>schema</Link> desde el cual se utiliza
          la <MiniCode>store</MiniCode> se lanzará una excepción. Para ello es recomendable que se
          utilice el método <MiniCode>currentDocuments</MiniCode>
        </P>
      </Danger>

      <H2 title={GET_CURRENT_SCHEMA_VALUES} />

      <P>
        En la sección anterior se utilizaba el método <MiniCode>get</MiniCode> para acceder a datos
        de otros <Link to={SCHEMA.redirect}>schemas</Link>, pero existen situaciones en las cuales
        se quieren utilizar los documentos generados del <Link to={SCHEMA.redirect}>schema</Link>{" "}
        actual hasta ese momento para generar un nuevo valor.
      </P>

      <P>
        Para solucionar esta situación se debe utilizar el método{" "}
        <MiniCode>currentDocuments</MiniCode> el cual devuelve un arreglo con los documentos creados
        hasta ese momento,{" "}
        <Strong>
          omitiendo el documento que se encuentra creándose en el momento de la iteración
        </Strong>
        .
      </P>

      <CurrentDefinition />

      <Tip title="Utilizar el documento actual">
        <P>
          El método <MiniCode>currentDocuments</MiniCode> devuelve todos los documentos creados
          hasta ese momento en el <Link to={SCHEMA.redirect}>schema</Link>, pero omite el documento
          que se encuentra en proceso de creación, si se quiere acceder a los campos de este se debe
          utilizar el objeto <MiniCode>currentFields</MiniCode>.
        </P>
      </Tip>
    </>
  )
}
