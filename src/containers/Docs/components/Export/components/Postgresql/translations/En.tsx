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
import { DatasetResult, Header } from "../../../shared/components"
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
} from "../components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  ARRAYS,
  TRANSFORMATIONS,
  KEY as KEY_POSTGRES,
  NESTED_SCHEMA,
  NULL_FIELDS,
  REF as REF_POSTGRES,
} from "@modules/docs/domain/core/sections/export/postgresql"
import { KEY, REF } from "@modules/docs/domain/core/sections/field-types"
import { PRIMITIVE_JS_URL } from "../domain/urls"

export default function En() {
  return (
    <>
      <Header extension="sql" format="postgresql" />

      <Warning title="What type of data can be exported?">
        <P>
          Data can only be exported in array form. If this condition is not satisfied, an exception
          will be thrown.
        </P>
      </Warning>

      <PostgresParams />

      <Warning title="PRIMARY KEYS">
        <P>
          If you set the <MiniCode>generateIds</MiniCode> parameter to <MiniCode>false</MiniCode>{" "}
          you must ensure that the <MiniCode>keys</MiniCode> parameter defines keys for each table
          to be created. If any table does not have at least one <MiniCode>PRIMARY KEY</MiniCode>{" "}
          defined, an exception will be thrown.
        </P>
      </Warning>

      <Definition />

      <DatasetResult extension="postgresql" language="sql" />

      <Info>
        <P>
          When exporting a <Link to={SCHEMA.redirect}>schema</Link> the generated table will have
          the name <MiniCode>Data</MiniCode> by default. In case of exporting a{" "}
          <Link to={DATASET.redirect}>dataset</Link> each table will have the name of the{" "}
          <Link to={SCHEMA.redirect}>schema</Link> that creates it.
        </P>
      </Info>

      <Warning title="Reserved words">
        <P>
          Chaca does not validate errors that may occur due to{" "}
          <Link to={SCHEMA.redirect}>schemas</Link> fields or names matching SQL reserved words.
        </P>
      </Warning>

      <H2 title={TRANSFORMATIONS} />

      <P>
        Unlike other formats, this format performs transformations on tables creation according to
        the <Link to={SCHEMA.redirect}>schema</Link> fields definition.
      </P>

      <H3 title={KEY_POSTGRES} />

      <P>
        All <Link to={KEY.redirect}>key fields</Link> defined inside a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> will be declared as{" "}
        <MiniCode>PRIMARY KEY</MiniCode> within each table.
      </P>

      <KeyTransformation />

      <H3 title={REF_POSTGRES} />

      <P>
        Reference fields will be defined in the SQL tables as <MiniCode>FOREIGN KEYS</MiniCode>
      </P>

      <RefTransformation />

      <H3 title={NULL_FIELDS} />

      <P>
        By default, if a field in none of the objects has a <MiniCode>null</MiniCode> value, it is
        assigned a <MiniCode>NOT NULL</MiniCode> flag on the definition of the SQL table to which it
        belongs. However, fields that were defined with <MiniCode>possibleNull</MiniCode> greater
        than 0 will not have the flag <MiniCode>NOT NULL</MiniCode> even if it has not had a{" "}
        <MiniCode>null</MiniCode> value in any generated document.
      </P>

      <NullTranformation />

      <H3 title={NESTED_SCHEMA} />

      <P>
        If there are nested <Link to={SCHEMA.redirect}>schemas</Link>, these will be converted into
        new tables that will be referenced through the <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <Link to={REF.redirect}>key fields</Link>.
      </P>

      <SchemaTransformation />

      <Warning title="Key field does not exist">
        <P>
          When a <Link to={SCHEMA.redirect}>schema</Link> is going to be converted to a SQL table,
          it will always have at least one <MiniCode>PRIMARY KEY</MiniCode>. If no{" "}
          <Link to={KEY.redirect}>key field</Link> is defined on the{" "}
          <Link to={SCHEMA.redirect}>schema</Link>, one will be automatically created with the name{" "}
          <MiniCode>id</MiniCode>.
        </P>

        <P>
          If there is more than one key within the <Link to={SCHEMA.redirect}>schema</Link>, all of
          them will be referenced from any table with which they have a relationship.
        </P>
      </Warning>

      <Warning title="Uniformity on your data">
        <P>
          The objects values must be uniform in terms of the data types on each property. Although
          the <MiniCode>null</MiniCode> value is allowed as a value that can be assumed by any
          property
        </P>

        <WrongObjectExport />
      </Warning>

      <H3 title={ARRAYS} />

      <P>
        Fields that are generated as arrays of values will be converted into new SQL tables where
        the information of the array values will be stored in each record. This new table has a{" "}
        <MiniCode>ManyToOne</MiniCode> relationship with the original{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <ArrayTransformation />

      <P>
        Each value of the array is stored inside the new SQL table, identified by a{" "}
        <MiniCode>PRIMARY KEY</MiniCode>. If the value to be saved is a
        <ExternalLink to={PRIMITIVE_JS_URL}>Javascript primitive value</ExternalLink>, this will be
        recorded in the <MiniCode>value</MiniCode> column as seen in the previous example.
      </P>

      <P>
        Otherwise, if the value to be saved is an object, the columns of the new table will be the
        object's properties names.
      </P>

      <ObjectTranformation />
    </>
  )
}
