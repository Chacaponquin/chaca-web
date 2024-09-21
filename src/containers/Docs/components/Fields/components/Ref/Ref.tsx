import { Content } from "@containers/Docs/shared/components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Danger,
  H2,
  Info,
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  RefExample,
  RefParams,
  UniqueExample,
  UserWhereExample,
  WhereExample,
  WhereParams,
  WrongUniqueExample,
} from "./components"
import { KEY, REF } from "@modules/docs/domain/core/sections/field-types"

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

      <Tip title="Referenciar campos llave">
        <P>
          Solo pueden ser referenciados los <Link to={KEY.redirect}>campos llave</Link>.
        </P>
      </Tip>

      <Info>
        <P>
          Un campo <MiniCode>ref</MiniCode> puede ser referenciado por otro de su mismo tipo, pero
          este debe estar definido como un <Link to={REF.redirect}>campo llave</Link>.
        </P>
      </Info>

      <P>
        Un ejemplo del uso para este tipo de campos se ve reflejado en la relación entre usuarios y
        productios en el contexto de un Ecommerce. Donde 1 usuario puede crear varios productos.
      </P>

      <RefExample />

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

      <P>
        Ya que se tiene la información de cada producto a este ejemplo se le puede añadir la
        validación de que el producto no pueda ser comprado por el usuario que lo haya creado.
      </P>

      <UserWhereExample />

      <H2>Referencias únicas</H2>

      <P>
        Una de las peculiaridades del método <MiniCode>ref</MiniCode> es que todas las relaciones
        entre <Link to={SCHEMA.redirect}>schemas</Link> creadas son de uno a muchos, o sea que la
        referencia escogida para un campo puede repetirse en otros documentos del mismo{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <P>
        Si se quiere conseguir que las relaciones entre un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        y otro sea de uno a uno, donde no se repita una referencia en más de un documento, se debe
        definir el parámetro <MiniCode>unique</MiniCode> como <MiniCode>true</MiniCode>.
      </P>

      <P>
        Para el caso donde se tienen dos entidades <MiniCode>Worker</MiniCode> y{" "}
        <MiniCode>User</MiniCode>, donde a cada trabajador le corresponde solamente el{" "}
        <MiniCode>id</MiniCode> de un usuario, se pueden generar los datos de la siguiente forma.
      </P>

      <UniqueExample />

      <P>
        Como se puede observar, a diferencia del ejemplo mostrado al principio de la sección, en el
        campo <MiniCode>id</MiniCode> de los documentos generados en <MiniCode>Worker</MiniCode> se
        tienen valores únicos para cada documento.
      </P>

      <Danger title="Documentos suficientes para referenciar">
        <P>
          Si se configura el parámetro <MiniCode>unique</MiniCode> como <MiniCode>true</MiniCode> se
          debe asegurar que la cantidad de documentos sean suficientes para satisfacer a todos los
          documentos del <Link to={SCHEMA.redirect}>schema</Link>. Si no se lanzará una excepción{" "}
          <MiniCode>NotEnoughValuesForRefError</MiniCode>.
        </P>

        <P>
          Utilizando el ejemplo anterior si se generan menos de <MiniCode>3</MiniCode> documentos
          para el <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>User</MiniCode> no existirían
          suficientes documentos para referenciar de forma única al campo{" "}
          <MiniCode>Worker.id</MiniCode>
        </P>

        <WrongUniqueExample />
      </Danger>
    </Content>
  )
}
