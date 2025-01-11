import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  GET_CURRENT_SCHEMA_VALUES,
  GET_SCHEMA_VALUES,
} from "@modules/docs/domain/core/sections/concepts/store"
import { CUSTOM, REF } from "@modules/docs/domain/core/sections/field-types"
import {
  Danger,
  H2,
  Link,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { CurrentDefinition, GetDefinition, GetExample, GetParams } from "../components"

export default function En() {
  return (
    <>
      <P>
        In certain cases, a defined field of a <Link to={SCHEMA.redirect}>schema</Link> needs
        information from other <Link to={SCHEMA.redirect}>schemas</Link> inside the{" "}
        <Link to={DATASET.redirect}>dataset</Link> in which it is located to generate its value. To
        solve this problem, the <Link to={CUSTOM.redirect}>custom</Link> and{" "}
        <Link to={REF.redirect}>reference</Link> fields as the <MiniCode>isArray</MiniCode> and{" "}
        <MiniCode>possibleNull</MiniCode> configurations receive a parameter{" "}
        <MiniCode>store</MiniCode> with which you can interact with the rest of{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> that are in the{" "}
        <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <H2 title={GET_SCHEMA_VALUES} />

      <P>
        The <MiniCode>get</MiniCode> method allows you to obtain an array of values from a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> by defining the field you want to access.
      </P>

      <GetDefinition />

      <GetParams />

      <P>
        For example, if you have a <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>User</MiniCode> here are some ways to get data from this{" "}
        <Link to={SCHEMA.redirect}>schema</Link> from another one that is on the same{" "}
        <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <GetExample />

      <Danger title="Accessing the schema itself">
        <P>
          If you try to access the <Link to={SCHEMA.redirect}>schema</Link> from which the{" "}
          <MiniCode>store</MiniCode> is used, an exception will be thrown. For this, it is
          recommended that you use the <MiniCode>currentDocuments</MiniCode> method.
        </P>
      </Danger>

      <H2 title={GET_CURRENT_SCHEMA_VALUES} />

      <P>
        In the previous section, the <MiniCode>get</MiniCode> method was used to access data from
        other <Link to={SCHEMA.redirect}>schemas</Link>, but there are situations in which you want
        to use the documents generated from the current <Link to={SCHEMA.redirect}>schema</Link> up
        to that point to generate a new value.
      </P>

      <P>
        To solve this situation, the method <MiniCode>currentDocuments</MiniCode> must be used,
        which returns an array with the documents created up to that moment,{" "}
        <Strong>omitting the document that is being created at the time of the iteration</Strong>.
      </P>

      <CurrentDefinition />

      <Tip title="Use the current document">
        <P>
          The <MiniCode>currentDocuments</MiniCode> method returns all documents created up to that
          point in the <Link to={SCHEMA.redirect}>schema</Link>, but ignores the document that is
          currently being created. If you want to access the fields of this document, you must use
          the <MiniCode>currentFields</MiniCode> object.
        </P>
      </Tip>
    </>
  )
}
