import {
  H2,
  Img,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@markdown/components/Markdown/components"
import {
  ExportExampleCode,
  GenerateValueApi,
  GenerateValueCode,
  ImportCode,
  TransformExampleCode,
  UserAndPostDefinition,
  UserDataExample,
  UserSchemaCode,
} from "./components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { IMAGE, INTERNET } from "@modules/docs/domain/core/sections/modules"
import { DOCS_IMAGE } from "@modules/docs/domain/constants/image"
import { OVERVIEW } from "@modules/docs/domain/core/sections/export"
import { REF, SEQUENCE } from "@modules/docs/domain/core/sections/field-types"
import {
  EXPORT_DATA,
  MODULE_DATA,
  RELATIONAL_DATA,
  SCHEMA_DATA,
  TRANSFORM_DATA,
} from "@modules/docs/domain/core/sections/get-started/usage"

export default function Usage() {
  return (
    <>
      <P>
        Ahora observemos las funcionalidades de Chaca aplicada a casos de uso reales. De todas
        formas, eres bienvenido a plantear otros casos de uso para poder aportar más ejemplos. Para
        utilizar Chaca solo es necesario importar <MiniCode>chaca</MiniCode> o{" "}
        <MiniCode>modules</MiniCode>
      </P>

      <ImportCode />

      <H2 title={MODULE_DATA} />

      <P>
        El caso de uso más simple es la generación de valores de los <MiniCode>modules</MiniCode>{" "}
        definidos en la librería
      </P>

      <GenerateValueCode />

      <P>
        Si deseas generar valores de un módulo desde una aplicación web sin necesidad de instalar la
        librería se pueden generar a través de una petición HTTP.
      </P>

      <GenerateValueApi />

      <H2 title={SCHEMA_DATA} />

      <P>
        Aparte de valores simples y primitivos, Chaca provee la forma de crear objetos complejos de
        datos más parecidos a la información existentes en aplicaciones reales. Esto se hace a
        través de la definición de <Link to={SCHEMA.redirect}>schemas</Link> con campos
        personalizables.
      </P>

      <P>
        Para este ejemplo se definirá un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>User</MiniCode> similar a la información guardada de un usuario en una aplicación.
      </P>

      <UserSchemaCode />

      <P>
        En este caso se puede observar como el <Link to={SCHEMA.redirect}>schema</Link> tiene:
      </P>

      <List>
        <ListItem>
          <P>
            <MiniCode>id</MiniCode> valor numérico secuencial.{" "}
            <Link to={SEQUENCE.redirect}>Leer sobre los campos sequence</Link>
          </P>
        </ListItem>
        <ListItem>
          <P>
            <MiniCode>username</MiniCode> nombre de usuario utilizando el módulo{" "}
            <Link to={INTERNET.redirect}>internet.username</Link>
          </P>
        </ListItem>
        <ListItem>
          <P>
            <MiniCode>image</MiniCode> url de la imagen de portada del usuario utilizando el módulo{" "}
            <Link to={IMAGE.redirect}>image.people</Link>
          </P>
        </ListItem>
        <ListItem>
          <P>
            <MiniCode>email</MiniCode> correo electrónico del usuario utilizando el módulo{" "}
            <Link to={INTERNET.redirect}>internet.email</Link>
          </P>
        </ListItem>
      </List>

      <P>
        Este <Link to={SCHEMA.redirect}>schema</Link> puede generar información en forma de objetos
        que tendrán la estructura definida.
      </P>

      <UserDataExample />

      <H2 title={RELATIONAL_DATA} />

      <P>
        En el mundo real la información almacenada y que se utiliza para cualquier tipo de proceso
        no se limita a valores simples como la generada en el{" "}
        <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>User</MiniCode>, sino que esta
        información está relacionada, como por ejemplo a través de las relaciones entre tablas en
        una base de datos <MiniCode>SQL</MiniCode>.
      </P>

      <P>
        Ubicándonos en el contexto de un Blog, dos entidades muy comunes en este dominio son los{" "}
        <Strong>usuarios</Strong> y <Strong>posts</Strong> (siendo usuarios los escritores y posts
        los artículos escritos por los usuarios). En las bases de datos de sistemas similares estas
        entidades suelen estar relacionadas a través de una relación uno a muchos, donde un usuario
        puede escribir varios posts.
      </P>

      <Img src={DOCS_IMAGE.USER_POSTS_RELATION} />

      <P>
        Para generar datos que respeten esta relación se pueden definir ambos schemas:{" "}
        <MiniCode>User</MiniCode> y <MiniCode>Post</MiniCode> dentro de un{" "}
        <Link to={DATASET.redirect}>Dataset</Link>, relaciónandolos utilizando un{" "}
        <Link to={REF.redirect}>campo referencia</Link>.
      </P>

      <UserAndPostDefinition alternative={false} />

      <P>
        En el <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Post</MiniCode> el campo{" "}
        <MiniCode>user_id</MiniCode> elige para cada objeto a crear uno de los{" "}
        <MiniCode>id</MiniCode> de los usuarios creados.
      </P>

      <Tip title="Otro enfoque de la relación">
        <P>
          Esta relación también se puede definir de forma inversa donde el usuario almacena un
          arreglo con los <MiniCode>id</MiniCode> de los <MiniCode>posts</MiniCode> escritos en el
          campo posts.
        </P>

        <UserAndPostDefinition alternative={true} />
      </Tip>

      <H2 title={EXPORT_DATA} />

      <P>
        Una vez se tengan creados los datos a partir de un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        o <Link to={DATASET.redirect}>dataset</Link>, estos pueden ser exportados en diferentes
        formatos de archivo para ser utilizados en otro momento.{" "}
        <Link to={OVERVIEW.redirect}>Leer más sobre los métodos de exportación.</Link>
      </P>

      <ExportExampleCode />

      <H2 title={TRANSFORM_DATA} />

      <P>
        Si se desean transpilar los datos generados a partir de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> o <Link to={DATASET.redirect}>dataset</Link> a la
        sintáxis de uno de los <Link to={OVERVIEW.redirect}>formatos definidos</Link> sin necesidad
        de exportarlos de forma física se puede hacer de la siguiente forma.
      </P>

      <TransformExampleCode />
    </>
  )
}
