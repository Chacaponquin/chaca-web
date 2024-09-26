import {
  ExternalLink,
  H2,
  H3,
  Info,
  Link,
  MiniCode,
  P,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Header } from "../../shared/components"
import {
  ArrayTransformation,
  Definition,
  KeyTransformation,
  NullTranformation,
  ObjectTranformation,
  PostgresParams,
  RefTransformation,
  SchemaTransformation,
  WrongObjectExport,
} from "./components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { KEY, REF } from "@modules/docs/domain/core/sections/field-types"

export default function Postgresql() {
  const primitiveJsUrl = "https://developer.mozilla.org/en-US/docs/Glossary/Primitive"

  return (
    <>
      <Header extension="sql" format="postgresql" />

      <Warning title="¿Qué tipo de dato se puede exportar?">
        <P>
          Solo puede exportarse datos en forma de arreglo. Si no cumple con esta condición se
          lanzará una excepción.
        </P>
      </Warning>

      <PostgresParams />

      <Definition />

      <Info>
        <P>
          Al exportar un <Link to={SCHEMA.redirect}>schema</Link> la tabla generada tendrá por
          defecto el nombre <MiniCode>Data</MiniCode>. En el caso de exportar un{" "}
          <Link to={DATASET.redirect}>dataset</Link> cada tabla tendrá el nombre del{" "}
          <Link to={SCHEMA.redirect}>schema</Link> que la crea.
        </P>
      </Info>

      <H2>Transformaciones</H2>

      <P>
        A diferencia de otros formatos en este se realizan transformaciones en la creación de las
        tablas según la definición de los campos de un <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <H3>Campos llave</H3>

      <P>
        Todos los <Link to={KEY.redirect}>campo llave</Link> definidos dentro de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> serán declarados como{" "}
        <MiniCode>PRIMARY KEY</MiniCode> dentro de cada tabla.
      </P>

      <KeyTransformation />

      <H3>Referencias</H3>

      <P>
        Los campos referencia serán definidos en las tablas SQL como{" "}
        <MiniCode>FOREIGN KEYS</MiniCode>
      </P>

      <RefTransformation />

      <H3>Campos nulos</H3>

      <P>
        Por defecto si un campo en ninguno de los objetos posee valor <MiniCode>null</MiniCode> se
        le asigna <MiniCode>NOT NULL</MiniCode> en la definición de la tabla SQL a la que pertenece.
        Pero los campos que fueron definidos con <MiniCode>possibleNull</MiniCode> mayor a 0 no
        tendrán la etiqueta <MiniCode>NOT NULL</MiniCode> aunque en ningún documento generado haya
        tenido valor <MiniCode>null</MiniCode>.
      </P>

      <NullTranformation />

      <H3>Schemas</H3>

      <P>
        En caso de que existan <Link to={SCHEMA.redirect}>schemas</Link> anidados, estos serán
        convertidos en nuevas tablas que serán referencias a través de los{" "}
        <Link to={REF.redirect}>campos llave</Link> del <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <SchemaTransformation />

      <Warning title="Campo llave inexistente">
        <P>
          Cuando un <Link to={SCHEMA.redirect}>schema</Link> va a ser convertido en una tabla SQL
          siempre va a tener al menos una <MiniCode>PRIMARY KEY</MiniCode>. Si no se encuentra
          definido ningún <Link to={KEY.redirect}>campo llave</Link> dentro del{" "}
          <Link to={SCHEMA.redirect}>schema</Link> se creará una de forma automáticade con nombre{" "}
          <MiniCode>id</MiniCode>.
        </P>

        <P>
          Si existe más de un llave dentro del <Link to={SCHEMA.redirect}>schema</Link> se
          referenciarán a todas desde cualquier tabla con la que contenga relación.
        </P>
      </Warning>

      <Warning title="Uniformidad en los datos">
        <P>
          Los valores existentes en los objetos deben ser uniformes en cuanto a los tipos de datos
          existentes en cada propiedad. Aunque se admite el valor <MiniCode>null</MiniCode> como
          valor que puede ser asumido por cualquier propiedad
        </P>

        <WrongObjectExport />
      </Warning>

      <H3>Arreglos</H3>

      <P>
        Los campos que al generarse constituyan arreglos de valores se convertirán en nuevas tablas
        SQL donde se guardará en cada registro la información de los valores del arreglo. Esta nueva
        tabla tiene una relación <MiniCode>ManyToOne</MiniCode> con el{" "}
        <Link to={SCHEMA.redirect}>schema</Link> original.
      </P>

      <ArrayTransformation />

      <P>
        Cada valor del arreglo es almacenado dentro de la nueva tabla SQL identificándose con una{" "}
        <MiniCode>PRIMARY KEY</MiniCode>. En caso de que el valor a guardar sea{" "}
        <ExternalLink to={primitiveJsUrl}>primitivo de Javascript</ExternalLink>, este se registrará
        dentro de la columna <MiniCode>value</MiniCode> como se pudo observar en el ejemplo
        anterior.
      </P>

      <P>
        En caso contrario, si el valor a guardar es un objeto las columnas de la nueva tabla serán
        los nombres de las propiedades del objeto.
      </P>

      <ObjectTranformation />
    </>
  )
}
