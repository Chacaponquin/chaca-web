import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Danger,
  H2,
  Info,
  Link,
  MiniCode,
  P,
  Tip,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  FirstNullExample,
  OwnRefExample,
  RefExample,
  RefParams,
  UniqueExample,
  UserWhereExample,
  WhereExample,
  WhereParams,
  WrongUniqueExample,
} from "../components"
import { KEY, REF } from "@modules/docs/domain/core/sections/field-types"
import {
  FILTER_DOCUMENTS,
  OWN_REF,
  REF_UNIQUE,
} from "@modules/docs/domain/core/sections/field-types/ref"

export default function En() {
  return (
    <>
      <P>
        To directly relate two <Link to={SCHEMA.redirect}>schemas</Link> inside a{" "}
        <Link to={DATASET.redirect}>dataset</Link> the reference field is the most useful way. This
        field selects for each document in the <Link to={SCHEMA.redirect}>schema</Link> one of the
        values of the referenced field.
      </P>

      <Definition />

      <RefParams />

      <Tip title="Referencing key fields">
        <P>
          Only <Link to={KEY.redirect}>key fields</Link> can be referenced.
        </P>
      </Tip>

      <Info>
        <P>
          A <MiniCode>ref</MiniCode> field can be referenced by another of the same type, but it
          must be defined as a <Link to={REF.redirect}>key field</Link> first.
        </P>
      </Info>

      <P>
        An example of the use of this field types is reflected in the relationship between users and
        products on a ecommerce context, where 1 user can create several products.
      </P>

      <RefExample />

      <Danger title="Bad reference">
        <P>
          If you try to reference a field incorrectly, the exception{" "}
          <MiniCode>NotExistFieldError</MiniCode> will be thrown .
        </P>
      </Danger>

      <H2 title={FILTER_DOCUMENTS} />

      <P>
        Sometimes not all documents in the referenced <Link to={SCHEMA.redirect}>schema</Link>
        are valid to be selected. To do this, the <MiniCode>ref</MiniCode> fields can receive a
        function that allows these documents to be filtered using their generated fields and the
        current state of the <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <WhereParams />

      <P>
        For example, if you want to select only products with a quantity greater than{" "}
        <MiniCode>0</MiniCode> for the <MiniCode>Shop</MiniCode>
        <Link to={SCHEMA.redirect}>schema</Link> .
      </P>

      <WhereExample />

      <P>
        Since we have the information for each product, we can add the validation to this example
        that the product cannot be purchased by the user who created it.
      </P>

      <UserWhereExample />

      <H2 title={REF_UNIQUE} />

      <P>
        One of the peculiarities of the <MiniCode>ref</MiniCode> method is that all relationships
        between <Link to={SCHEMA.redirect}>schemas</Link> created are one-to-many, meaning that the
        reference chosen for a field can be repeated in other documents of the same{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <P>
        If you want to achieve one-to-one relationships between one{" "}
        <Link to={SCHEMA.redirect}>schema</Link> and another, where a reference is not repeated in
        more than one document, you must define the parameter <MiniCode>unique</MiniCode> as{" "}
        <MiniCode>true</MiniCode>.
      </P>

      <P>
        In the case where there are two entities <MiniCode>Worker</MiniCode> and{" "}
        <MiniCode>User</MiniCode>, where each worker corresponds only to the <MiniCode>id</MiniCode>{" "}
        of a user, the data can be generated in the following way.
      </P>

      <UniqueExample />

      <P>
        As you can see, unlike the example shown at the beginning of the section, the{" "}
        <MiniCode>id</MiniCode> field of the documents generated in <MiniCode>Worker</MiniCode> has
        unique values for each document.
      </P>

      <Danger title="Enough documents to reference">
        <P>
          Setting the <MiniCode>unique</MiniCode> parameter to <MiniCode>true</MiniCode> must ensure
          that the number of documents is sufficient to satisfy all documents in the{" "}
          <Link to={SCHEMA.redirect}>schema</Link>. Otherwise a{" "}
          <MiniCode>NotEnoughValuesForRefError</MiniCode> exception will be thrown.
        </P>

        <P>
          Using the example above, if less than <MiniCode>3</MiniCode> documents are generated for
          the <MiniCode>User</MiniCode> <Link to={SCHEMA.redirect}>schema</Link> there would not be
          enough documents to uniquely reference the field <MiniCode>Worker.id</MiniCode>
        </P>

        <WrongUniqueExample />
      </Danger>

      <H2 title={OWN_REF} />

      <P>
        A <MiniCode>ref</MiniCode> field can reference the <Link to={SCHEMA.redirect}>schema</Link>{" "}
        in which it is defined without causing a{" "}
        <Link to={DATASET.cyclicUrl}>cyclic dependency</Link>. For example, to define a{" "}
        <MiniCode>Category</MiniCode> <Link to={SCHEMA.redirect}>schema</Link> where each category
        can have a parent category, you can do it as follows.
      </P>

      <OwnRefExample />

      <Warning title="Null References">
        <P>
          The data for each <Link to={SCHEMA.redirect}>schema</Link> is created sequentially.
          Therefore, when the first document is created, when looking for a reference in the{" "}
          <Link to={SCHEMA.redirect}>schema</Link> itself, there will be no documents to reference.
          For this reason, the first document generated will always have a <MiniCode>null</MiniCode>{" "}
          value for that field.
        </P>

        <FirstNullExample />
      </Warning>

      <Info>
        <P>
          If a field references its own <Link to={SCHEMA.redirect}>schema</Link> the{" "}
          <MiniCode>nullOnEmpty</MiniCode> parameter is automatically converted to{" "}
          <MiniCode>true</MiniCode>, because the first returned by the reference will always be{" "}
          <MiniCode>null</MiniCode>.
        </P>
      </Info>
    </>
  )
}
