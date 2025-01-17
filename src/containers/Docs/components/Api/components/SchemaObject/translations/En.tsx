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
import {
  ApiRoute,
  Body,
  EnumParams,
  Example,
  FieldsList,
  ModuleParams,
  PickParams,
  ProbabilityParams,
  RefParams,
  SchemaParams,
  SequenceParams,
  SequentialParams,
  Try,
} from "../components"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  AVAILABLE_FIELDS,
  BODY,
  ENUM,
  EXAMPLE,
  MODULE,
  NESTED_SCHEMA,
  PICK,
  PROBABILITY,
  REF,
  SEQUENCE,
  SEQUENTIAL,
} from "@modules/docs/domain/core/sections/api/schema-object"
import { CUSTOM } from "@modules/docs/domain/core/sections/field-types"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import { SCHEMA_OBJECT } from "@modules/docs/domain/core/sections/api"

export default function En() {
  return (
    <>
      <ApiRoute />
      <P>
        This route allows you to generate a document from the definition of a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> that is passed on the request{" "}
        <MiniCode>body</MiniCode>.
      </P>
      <H2 title={BODY} />
      <P>
        The request body must contain the definition of the <Link to={SCHEMA.redirect}>schema</Link>
        . The fields definition differs slightly from the way they are defined when using the
        library.
      </P>
      <P>
        For example, the next request would define a <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>Movie</MiniCode> containing information about a movie.
      </P>
      <Body />
      <H3 title={AVAILABLE_FIELDS} />
      <P>
        First of all, it should be clarified that in order to generate data through a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> in this path not all{" "}
        <Link to={CUSTOM.redirect}>field types</Link> described in other sections are available;
        this is because the implementation is done through the JSON format and not with Javascript.
      </P>
      <P>
        The field types available to define these <Link to={SCHEMA.redirect}>schemas</Link> are:
      </P>
      <FieldsList />
      <P>
        These are joined by two types of fields that exist only for the API: one to use the{" "}
        <Link to={OVERVIEW.redirect}>predefined modules</Link> of the library and another to define{" "}
        <Link to={SCHEMA.nestedSchemaUrl}>nested schemas</Link>.
      </P>
      <List>
        <ListItem>
          <P>
            <Link to={SCHEMA_OBJECT.nestedSchemaUrl}>Nested schema</Link>
          </P>
        </ListItem>
        <ListItem>
          <P>
            <Link to={SCHEMA_OBJECT.moduleUrl}>Module</Link>
          </P>
        </ListItem>
      </List>
      <P>
        All of these fields have different ways of being defined inside the{" "}
        <Link to={SCHEMA.redirect}>schema</Link>. Below are the parameters needed to configure each
        of these fields.
      </P>
      <Tip title="About parameters">
        <P>
          If you want to learn more about the parameters of each type of field, you can review the
          documentation for each one.
        </P>
      </Tip>

      <H3 title={ENUM} />
      <EnumParams />

      <H3 title={PICK} />
      <PickParams />

      <H3 title={PROBABILITY} />
      <ProbabilityParams />

      <H3 title={SEQUENCE} />
      <SequenceParams />

      <H3 title={SEQUENTIAL} />
      <SequentialParams />

      <H3 title={MODULE} />
      <ModuleParams />

      <H3 title={REF} />
      <RefParams />

      <Warning title="Api id">
        <P>
          Note that although in most cases the <Link to={OVERVIEW.redirect}>module</Link>{" "}
          <Link to={OVERVIEW.apiIdUrl}>api id</Link> is equal to the name of its method within the
          Chaca library, this is not true for all cases, so you should carefully review the
          documentation for each <Link to={OVERVIEW.redirect}>module</Link> that you want to use to
          know specifically the <Link to={OVERVIEW.apiIdUrl}>api id</Link>.
        </P>
      </Warning>

      <H3 title={NESTED_SCHEMA} />
      <SchemaParams />

      <H2 title={EXAMPLE} />

      <P>
        This example will show different ways in which a data object can be generated from the{" "}
        <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode> described before.
      </P>

      <Example />

      <Try />
    </>
  )
}
