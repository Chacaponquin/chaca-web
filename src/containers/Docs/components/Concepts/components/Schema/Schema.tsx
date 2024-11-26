import {
  H2,
  H3,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
} from "@markdown/components/Markdown/components"
import {
  Definition,
  ExportParams,
  ExportSchema,
  ExportUserSchema,
  GenerateCode,
  NestedSchemaExample,
  NewFieldCode,
  UserDataExample,
  UserSchemaDefinition,
} from "./components"
import { CUSTOM, KEY, SEQUENCE } from "@modules/docs/domain/core/sections/field-types"
import { DATATYPE, IMAGE, INTERNET } from "@modules/docs/domain/core/sections/modules"
import {
  DEFINITION,
  EXAMPLE,
  EXPORT_DATA,
  GENERATE_DATA,
  NESTED_SCHEMA,
  PARAMS,
} from "@modules/docs/domain/core/sections/concepts/schema"

export default function Schema() {
  return (
    <>
      <P>
        Chaca provee la capacidad de crear y definir objetos <Strong>mock</Strong> de datos
        simulando la definición de una tabla o una colección en una base de datos, esto utilizando
        valores primitivos de la librería y campos personalizables para simular de forma más
        realista las reglas de negocio en los datos.
      </P>

      <H2 title={DEFINITION} />

      <P>
        Para definir un <MiniCode>schema</MiniCode> solo es necesario utilizar el método{" "}
        <MiniCode>chaca.schema</MiniCode> el cual recibe un objeto con los campos que tendrán cada
        uno de los documentos a generar.
      </P>

      <Definition />

      <P>
        En el siguiente ejemplo se define un schema <MiniCode>User</MiniCode> con campos que guardan
        información realista de un usuario.
      </P>

      <UserSchemaDefinition />

      <P>
        Como se puede ver en este <MiniCode>schema</MiniCode> se definen los siguientes campos:
      </P>

      <List>
        <ListItem>
          <P>
            <MiniCode>id</MiniCode>: valor numérico secuencial y{" "}
            <Link to={KEY.redirect}>llave</Link> del <MiniCode>Schema</MiniCode>.{" "}
            <Link to={SEQUENCE.redirect}>Leer sobre los campos sequence</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>username</MiniCode>: nombre de usuario utilizando el módulo{" "}
            <Link to={INTERNET.redirect}>internet.username</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>email</MiniCode>: correo electrónico del usuario utilizando el módulo{" "}
            <Link to={INTERNET.redirect}>internet.email</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>password</MiniCode>: contraseña del usuario utilizando el módulo{" "}
            <Link to={INTERNET.redirect}>internet.password</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>image</MiniCode>: url de la imagen de portada del usuario utilizando el módulo{" "}
            <Link to={IMAGE.redirect}>image.people</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>age</MiniCode>: edad del usuario utilizando el módulo{" "}
            <Link to={DATATYPE.redirect}>datatype.int</Link>, limitando los valores a números
            enteros entre <MiniCode>18</MiniCode> y <MiniCode>100</MiniCode> asegurando que el
            usuario sea mayor de edad
          </P>
        </ListItem>
      </List>

      <P>
        Hasta este momento cada uno de estos campos son generados de forma aleatoria, pero siendo
        realistas en la mayoría de casos existen campos calculados que dependen de los valores
        existentes.
      </P>

      <P>
        Para este caso se supone que es necesario la información que indique si un usuario es
        considerado joven dentro de la aplicación, siendo el límite de juventud{" "}
        <MiniCode>35</MiniCode> años. Para esto se creará un campo <MiniCode>isYoung</MiniCode>{" "}
        dentro del <MiniCode>schema</MiniCode> como se observa en el siguiente código.
      </P>

      <NewFieldCode />

      <P>
        En este código el campo <MiniCode>isYoung</MiniCode> es de tipo{" "}
        <Link to={CUSTOM.redirect}>custom</Link> y accede al campo <MiniCode>age</MiniCode> para
        compararlo con el límite definido (35), devolviendo <MiniCode>true</MiniCode> en caso de que
        sea menor a 35 y <MiniCode>false</MiniCode>
        en caso contrario.
      </P>

      <H2 title={GENERATE_DATA} />

      <P>
        Una vez definido el <MiniCode>schema</MiniCode> se pueden generar objetos de datos que
        cumplan con los campos y reglas definidas. Se puede generar un objeto o un arreglo de
        objetos como se ve en los siguientes códigos
      </P>

      <GenerateCode />

      <H2 title={EXPORT_DATA} />

      <P>
        Para generar y exportar los datos de un <MiniCode>Schema</MiniCode> se utiliza el método{" "}
        <MiniCode>export</MiniCode>. Este método crea los archivos con los datos generados en la
        ruta especificada.
      </P>

      <ExportSchema />

      <H3 title={PARAMS} />

      <ExportParams />

      <H3 title={EXAMPLE} />

      <P>
        Para generar y exportar 3 documentos del <MiniCode>User Schema</MiniCode> creado
        anteriormente se haría de la siguiente forma, guardando los datos en un archivo{" "}
        <MiniCode>user.json</MiniCode> dentro de la carpeta <MiniCode>data</MiniCode>
      </P>

      <ExportUserSchema />

      <P>
        El archivo <MiniCode>user.json</MiniCode> contendrá unos datos similares a los siguientes.
      </P>

      <UserDataExample />

      <H2 title={NESTED_SCHEMA} />

      <P>
        Si se desea que el valor generado para un campo dentro de un <MiniCode>schema</MiniCode>{" "}
        tenga forma de objeto Chaca provee la posibilidad de definir un campo como un{" "}
        <MiniCode>schema</MiniCode>.
      </P>

      <NestedSchemaExample />
    </>
  )
}
