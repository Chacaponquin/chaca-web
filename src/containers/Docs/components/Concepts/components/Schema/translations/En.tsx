import {
  DEFINITION,
  EXPORT_DATA,
  GENERATE_DATA,
  EXAMPLE,
  TRANSFORM_DATA,
  TRANSFORM_EXAMPLE,
  NESTED_SCHEMA,
} from "@modules/docs/domain/core/sections/concepts/schema"
import { DATATYPE, IMAGE, INTERNET, OVERVIEW } from "@modules/docs/domain/core/sections/modules"
import {
  H2,
  H3,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  ExportParams,
  ExportSchema,
  ExportUserSchema,
  GenerateCode,
  NestedSchemaExample,
  NewFieldCode,
  TransformDefinition,
  TransformExample,
  TransformParams,
  UserDataExample,
  UserSchemaDefinition,
} from "../components"
import { CUSTOM, KEY, SEQUENCE } from "@modules/docs/domain/core/sections/field-types"
import { FormatsList } from "@containers/Docs/shared/components"

export default function En() {
  return (
    <>
      <P>
        Chaca provides the ability to create and define <Strong>mock</Strong> data objects
        simulating the definition of a table or collection on a database, doing this using primitive
        values from the library (known as <Link to={OVERVIEW.redirect}>modules</Link>) and
        customizable fields to more realistically simulate compliance with data business rules.
      </P>

      <H2 title={DEFINITION} />

      <P>
        To define a <MiniCode>schema</MiniCode> you only need to use the{" "}
        <MiniCode>chaca.schema</MiniCode> method which receives an object with the fields that each
        of the documents to be generated will have.
      </P>

      <Definition />

      <P>
        The following example defines an <MiniCode>User</MiniCode> schema with fields that store
        realistic information about a user.
      </P>

      <UserSchemaDefinition />

      <P>
        As you can see in this <MiniCode>schema</MiniCode> the following fields are defined:
      </P>

      <List>
        <ListItem>
          <P>
            <MiniCode>id</MiniCode>: <Link to={SEQUENCE.redirect}>sequential numeric</Link>
            and <Link to={KEY.redirect}>key</Link> value of the <MiniCode>schema</MiniCode>.{" "}
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>username</MiniCode>: username using the module{" "}
            <Link to={INTERNET.redirect}>internet.username</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>email</MiniCode>: user email using the module{" "}
            <Link to={INTERNET.redirect}>internet.email</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>password</MiniCode>: user's password using the module
            <Link to={INTERNET.redirect}>internet.password</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>image</MiniCode>: user's cover image url using the module
            <Link to={IMAGE.redirect}>image.people</Link>
          </P>
        </ListItem>

        <ListItem>
          <P>
            <MiniCode>age</MiniCode>: user's age using the module
            <Link to={DATATYPE.redirect}>datatype.int</Link>, limiting values to integers between{" "}
            <MiniCode>18</MiniCode> and <MiniCode>100</MiniCode>, ensuring that the user is on the
            legal age
          </P>
        </ListItem>
      </List>

      <P>
        Until this point each of these fields are generated randomly, but realistically, in most
        cases there are calculated fields that depend on the existing values.
      </P>

      <P>
        For this case, it is assumed that information is needed to indicate whether a user is
        considered young on the application, with the youth limit being <MiniCode>35</MiniCode>{" "}
        years. For this, a field <MiniCode>isYoung</MiniCode> will be created on the{" "}
        <MiniCode>schema</MiniCode> as shown in the following code.
      </P>

      <NewFieldCode />

      <P>
        In this code the field <MiniCode>isYoung</MiniCode> a{" "}
        <Link to={CUSTOM.redirect}>custom</Link> field and accesses the field{" "}
        <MiniCode>age</MiniCode> to compare it with the defined limit (35), returning{" "}
        <MiniCode>true</MiniCode> if it is less than or equal to 35 and <MiniCode>false</MiniCode>{" "}
        otherwise.
      </P>

      <H2 title={GENERATE_DATA} />

      <P>
        Once the <MiniCode>schema</MiniCode> has been defined, data objects can be generated that
        comply with the defined fields and rules. An object or an array of objects can be generated,
        as shown in the following code.
      </P>

      <GenerateCode />

      <H2 title={EXPORT_DATA} />

      <P>
        The <MiniCode>export</MiniCode> method is used to generate and export data from a{" "}
        <MiniCode>schema</MiniCode>. This method creates files with the generated data in the
        specified path. Files can be exported in any of the following formats:
      </P>

      <FormatsList />

      <ExportSchema />

      <ExportParams />

      <H3 title={EXAMPLE} />

      <P>
        To generate and export 3 documents from the User <MiniCode>schema</MiniCode> created
        previously, you would do it in the following way, saving the data on a{" "}
        <MiniCode>user.json</MiniCode> file inside the <MiniCode>data</MiniCode> folder
      </P>

      <ExportUserSchema />

      <P>
        The <MiniCode>user.json</MiniCode> file will contain data similar to the next one.
      </P>

      <UserDataExample />

      <H2 title={TRANSFORM_DATA} />

      <P>
        The <MiniCode>transform</MiniCode> method is used to transform the data of a{" "}
        <MiniCode>schema</MiniCode>.
      </P>

      <TransformDefinition />

      <TransformParams />

      <H3 title={TRANSFORM_EXAMPLE} />

      <P>
        To transform 3 documents from the User <MiniCode>schema</MiniCode> created previously into{" "}
        <MiniCode>json</MiniCode> format, it would be done as follows.
      </P>

      <TransformExample />

      <H2 title={NESTED_SCHEMA} />

      <P>
        If you want the value generated for a field inside a document to be an object, Chaca
        provides the possibility of defining a field as a <MiniCode>schema</MiniCode>. Because the
        data is generated recursively, nested <MiniCode>schemas</MiniCode> can be defined at any
        level of the definition.
      </P>

      <NestedSchemaExample />
    </>
  )
}
