import {
  H2,
  H3,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Tip,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Route } from "../../shared/components"
import {
  Body,
  EnumParams,
  Example,
  FieldsList,
  ModuleParams,
  PickParams,
  ProbabilityParams,
  SchemaParams,
  SequenceParams,
  SequentialParams,
  Try,
} from "./components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { CUSTOM } from "@modules/docs/domain/core/sections/field-types"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"

export default function SchemaObject() {
  return (
    <>
      <Route method="post" url="api/schema" />

      <P>
        Esta ruta permite generar un documento a partir de la definición de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> que es pasado en el <MiniCode>body</MiniCode> de la
        petición.
      </P>

      <H2 id={SCHEMA_OBJECT.bodyId}>Body</H2>
      <P>
        El cuerpo de la petición debe contener la definición del{" "}
        <Link to={SCHEMA.redirect}>schema</Link>. La definición de los campos difiere un poco a la
        forma en la que son definidos al usar la librería.
      </P>
      <P>
        Por ejemplo, de la siguiente forma se definiría un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>Movie</MiniCode> que contenga la información de una película.
      </P>
      <Body />

      <H3>Tipos de campo disponibles</H3>
      <P>
        Primero que nada se debe aclarar para generar datos a través de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> en esta ruta no se encuentran disponibles todos los{" "}
        <Link to={CUSTOM.redirect}>tipos de campo</Link> descritos en otras secciones; esto es
        debido a que la implementación se realiza a través del formato JSON y no con Javascript.
      </P>
      <P>
        Los tipos de campo disponibles para definir estos <Link to={SCHEMA.redirect}>schemas</Link>{" "}
        son:
      </P>

      <FieldsList />

      <P>
        A estos se le suman dos tipos de campo existentes solamente para la API: uno para utilizar
        los <Link to={OVERVIEW.redirect}>módulos predefinidos</Link> de la librería y otro para
        definir <Link to={SCHEMA.buildUrl(SCHEMA.nestedSchemaId)}>schemas anidados</Link>.
      </P>

      <List>
        <ListItem>
          <P>
            <Link to={SCHEMA_OBJECT.buildIdUrl(SCHEMA_OBJECT.nestedSchemaId)}>Nested schema</Link>
          </P>
        </ListItem>
        <ListItem>
          <P>
            <Link to={SCHEMA_OBJECT.buildIdUrl(SCHEMA_OBJECT.moduleId)}>Module</Link>
          </P>
        </ListItem>
      </List>

      <P>
        Todos estos campos poseen formas distintas de definirse dentro del{" "}
        <Link to={SCHEMA.redirect}>schema</Link>. A continuación se mostrarán los parámetros
        necesarios para configurar cada uno de estos campos.
      </P>

      <Tip title="Acerca de los parámetros">
        <P>
          Si deseas informarte más acerca de los parámetros de cada tipo de campo puedes revisar la
          documentación de cada uno.
        </P>
      </Tip>

      <H3>Enum</H3>
      <EnumParams />

      <H3>Pick</H3>

      <PickParams />

      <H3>Probability</H3>
      <ProbabilityParams />

      <H3>Sequence</H3>
      <SequenceParams />

      <H3>Sequential</H3>
      <SequentialParams />

      <H3 id={SCHEMA_OBJECT.moduleId}>Module</H3>

      <ModuleParams />

      <Warning title="Api id">
        <P>
          Nótese que aunque en la mayoría de ocasiones el{" "}
          <Link to={OVERVIEW.buildUrl(OVERVIEW.apiIdId)}>api id</Link> de un{" "}
          <Link to={OVERVIEW.redirect}>módulo</Link> es igual al nombre de su método dentro de la
          librería de Chaca, esto no se cumple para todos los casos, por lo que se debe revisar bien
          la documentación de cada <Link to={OVERVIEW.redirect}>módulo</Link> que se quiera utilizar
          para saber específicamente cuál es su{" "}
          <Link to={OVERVIEW.buildUrl(OVERVIEW.apiIdId)}>api id</Link>.
        </P>
      </Warning>

      <H3 id={SCHEMA_OBJECT.nestedSchemaId}>Schema</H3>
      <SchemaParams />

      <H2>Ejemplo</H2>

      <P>
        Para este ejemplo se expondrán distintas formas en las que se puede generar un objeto de
        datos a partir del <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode>{" "}
        descrito anteriormente.
      </P>

      <Example />

      <Try />
    </>
  )
}
