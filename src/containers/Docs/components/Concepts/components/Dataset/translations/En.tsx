import { DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  CYCLIC_DEPENDENCE,
  DEFINITION,
  EXAMPLE,
  EXPORT_DATA,
  GENERATE,
  GENERATION_SEQUENCE,
  HOW_CREATE_DATA,
  TRANSFORM_DATA,
} from "@modules/docs/domain/core/sections/concepts/dataset"
import {
  Danger,
  H2,
  H3,
  Img,
  Info,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  DatasetDefinition,
  DatasetParams,
  EcommerceDatasetDefinition,
  EcommerceExample,
  EcommerceGenerate,
  ExportDefinition,
  ExportParams,
  GenerateDefinition,
  LikeSchemaDefinition,
  NewEcommerceDataset,
  ProductSchemaDefinition,
  TransformDefinition,
  TransformExample,
  TransformParams,
  UserSchemaDefinition,
} from "../components"
import { REF } from "@modules/docs/domain/core/sections/field-types"
import { FormatsList } from "@containers/Docs/shared/components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/export"
import { DOCS_IMAGE } from "@modules/docs/domain/constants/image"

export default function En() {
  return (
    <>
      <P>
        <MiniCode>Datasets</MiniCode> are a set of n number of{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> that may or may not be related to each other.
        These are similar to the database modeling in any software development.
      </P>

      <H2 title={DEFINITION} />

      <P>
        To define a <MiniCode>Dataset</MiniCode>, its <Link to={SCHEMA.redirect}>schemas</Link> must
        first be defined. For this, the <MiniCode>chaca.dataset</MiniCode> method is used, which
        receives an array with the <Link to={SCHEMA.redirect}>schemas</Link> configuration.
      </P>

      <DatasetDefinition />

      <DatasetParams />

      <Danger title="Schema names">
        <P>
          If a <Link to={SCHEMA.redirect}>schema</Link> is defined with an empty name, an exception
          will be thrown.
        </P>
        <P>
          Two or more <Link to={SCHEMA.redirect}>schemas</Link> with the same name cannot be defined
          either.
        </P>
      </Danger>

      <P>
        For example, in the context of an E-commerce there are two common entities in the domain:
        <MiniCode>User</MiniCode> and <MiniCode>Product</MiniCode> entity. To simulate the modeling
        of a <MiniCode>Dataset</MiniCode> with these entities we will start by defining the{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> of both entities.
      </P>

      <UserSchemaDefinition />

      <ProductSchemaDefinition />

      <Tip title="Schema relations">
        <P>
          Note that the relationship between both <Link to={SCHEMA.redirect}>schemas</Link> is
          defined through the <Link to={REF.redirect}>reference field</Link>{" "}
          <MiniCode>userId</MiniCode> inside the schema <MiniCode>Product</MiniCode>.
        </P>
      </Tip>

      <P>
        Once the <Link to={SCHEMA.redirect}>schemas</Link> have been defined, all that remains is to
        define the <MiniCode>Dataset</MiniCode>.
      </P>

      <EcommerceDatasetDefinition />

      <H2 title={GENERATE} />

      <P>
        To generate the data for a defined <MiniCode>Dataset</MiniCode> you must use the
        <MiniCode>generate</MiniCode> method. This returns an object in which each property is the
        name of the <Link to={SCHEMA.redirect}>schema</Link> with its data.
      </P>

      <GenerateDefinition />

      <P>
        Generating the <MiniCode>Dataset</MiniCode> defined in the previous section would return the
        following result.
      </P>

      <EcommerceGenerate />

      <H2 title={EXPORT_DATA} />

      <P>
        To generate and export data from a <MiniCode>Dataset</MiniCode> the{" "}
        <MiniCode>export</MiniCode> method is used. This generates the files needed to save the data
        and returns the location of the files. Files can be exported in any of the following
        formats:
      </P>

      <FormatsList />

      <ExportDefinition />

      <ExportParams />

      <Info>
        <P>
          Each export format has different configuration parameters. Check the documentation for
          each one to see them.
        </P>
      </Info>

      <P>
        Continuing with the previous example, the following code generates and exports the data in a{" "}
        <MiniCode>ecommerce.json</MiniCode> file inside the <MiniCode>data</MiniCode> folder.
      </P>

      <EcommerceExample />

      <H2 title={TRANSFORM_DATA} />

      <P>
        To generate and transform the data from a <MiniCode>Dataset</MiniCode> into one of the{" "}
        <Link to={OVERVIEW.redirect}>defined formats</Link>, the <MiniCode>transform</MiniCode>{" "}
        method is used.
      </P>

      <TransformDefinition />

      <TransformParams />

      <P>
        Continuing with the previous example, the following code generates and transforms the data
        from the <MiniCode>Dataset</MiniCode> into a file <MiniCode>ecommerce.json</MiniCode>.
      </P>

      <TransformExample />

      <H2 title={HOW_CREATE_DATA} />

      <P>
        Sometimes data generation can cause errors due to the hierarchy when creating the data from
        a <MiniCode>Dataset</MiniCode>. Therefore, we will analyze below the sequence of steps to
        generate this data.
      </P>

      <H3 title={GENERATION_SEQUENCE} />

      <P>
        When generating data for a <MiniCode>Dataset</MiniCode>, the{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> are created in the order in which they appear in
        the array. The generation of a <Link to={SCHEMA.redirect}>schema</Link> (if any of the
        fields are related to another field in the same <MiniCode>Dataset</MiniCode> through a{" "}
        <Link to={REF.redirect}>ref field</Link> or by using the{" "}
        <Link to={DATASET_STORE.redirect}>store</Link>) can be interrupted to create the data for
        the related <Link to={SCHEMA.redirect}>schema</Link> until the data needed for the field is
        available.
      </P>

      <Info>
        <P>
          This process is recursive, so if the referenced <Link to={SCHEMA.redirect}>schema</Link>{" "}
          contains any field that depends on another <Link to={SCHEMA.redirect}>schema</Link>, its
          generation will be interrupted until all the necessary data is available.{" "}
          <Strong>Because of this, care must be taken with cyclic dependencies.</Strong>
        </P>
      </Info>

      <P>
        To make it clearer, the <MiniCode>Dataset</MiniCode> generation can be seen as a process
        involving three execution stacks:
      </P>

      <List>
        <ListItem>
          <P>Completed</P>
        </ListItem>
        <ListItem>
          <P>Waiting</P>
        </ListItem>
        <ListItem>
          <P>In process</P>
        </ListItem>
      </List>

      <Img src={DOCS_IMAGE.STACKS} full />

      <P>
        All <Link to={SCHEMA.redirect}>schemas</Link> start in the <Strong>Waiting</Strong> stack,
        passing one by one to the <Strong>In Process</Strong> stack. In the{" "}
        <Strong>In Process</Strong> stack there can only be one{" "}
        <Link to={SCHEMA.redirect}>schema</Link>, which is generating the array with its data, when
        its generation is finished it goes to the <Strong>Completed</Strong> stack. This process
        continues for each <Link to={SCHEMA.redirect}>schema</Link> until all are completed.
      </P>

      <P>
        If the <Link to={SCHEMA.redirect}>schema</Link> that is in the stack{" "}
        <Strong>In process</Strong> contains a field that depends on the data of another{" "}
        <Link to={SCHEMA.redirect}>schema</Link>, it goes directly to the beginning of the stack{" "}
        <Strong>Waiting</Strong> until the referenced <Link to={SCHEMA.redirect}>schema</Link>{" "}
        finishes generating its data.
      </P>

      <Img src={DOCS_IMAGE.STACKS_DEPENS} full />

      <Tip title="Completed Dependencies">
        <P>
          In case the dependencies of the <Link to={SCHEMA.redirect}>schema</Link> that is in the
          stack <Strong>In Process</Strong> are in the stack <Strong>Completed</Strong> that has all
          the data required to be generated. Therefore, it is not necessary to make any changes in
          the generation sequence.
        </P>
      </Tip>

      <H3 title={EXAMPLE} />

      <P>
        We will use the previously defined <MiniCode>Ecommerce</MiniCode> case to represent the
        execution sequence, but a new <Link to={SCHEMA.redirect}>schema</Link> will be added:{" "}
        <MiniCode>Like</MiniCode>, which stores the information about each user's likes for the
        products. This <Link to={SCHEMA.redirect}>schema</Link> is defined as follows.
      </P>

      <LikeSchemaDefinition />

      <P>
        The <MiniCode>Dataset</MiniCode> with the addition of this{" "}
        <Link to={SCHEMA.redirect}>schema</Link> will be defined as follows.
      </P>

      <NewEcommerceDataset />

      <P>
        When generating the <MiniCode>Dataset</MiniCode> all the{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> start on the <Strong>Waiting.</Strong> stack in
        the order in which they were defined.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STACKS} full />

      <P>
        The generation of the <MiniCode>30</MiniCode> documents for the <MiniCode>Likes</MiniCode>{" "}
        <Link to={SCHEMA.redirect}>schema</Link> begins, so this is moved to the{" "}
        <Strong>In Process</Strong> stack.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_1} full />

      <P>
        When generating the first document, it is time to create a value for the field{" "}
        <MiniCode>userId</MiniCode>, which is a reference field for <MiniCode>User</MiniCode>. When
        searching a value for this field, it is verified that <MiniCode>User</MiniCode> is not
        generated, due to this <MiniCode>User</MiniCode> moves to the <Strong>In process</Strong>{" "}
        stack and <MiniCode>Likes</MiniCode> moves to the top of the <Strong>Waiting</Strong> stack.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_2} full />

      <P>
        In the <MiniCode>User</MiniCode> <Link to={SCHEMA.redirect}>schema</Link> no field has
        dependencies on the values of another <Link to={SCHEMA.redirect}>schema</Link> so its data
        can be generated without interruption. When the process is finished{" "}
        <MiniCode>User</MiniCode> goes to the <Strong>Completed</Strong> stack and the next{" "}
        <Link to={SCHEMA.redirect}>schema</Link> continues in the <Strong>Waiting</Strong> stack.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_3} full />

      <P>
        When the generation of <MiniCode>Likes</MiniCode> is resumed, the necessary data is already
        available in <MiniCode>User</MiniCode> for the <MiniCode>userId</MiniCode> field. However,
        when reaching the <MiniCode>productId</MiniCode> field, a dependency occurs again, this time
        with the <MiniCode>Product</MiniCode> <Link to={SCHEMA.redirect}>schema</Link> so the
        generation of <MiniCode>Likes</MiniCode> is interrupted again and the process is started
        with <MiniCode>Product</MiniCode> until the necessary data is available.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_4} full />

      <P>
        When generating <MiniCode>Product</MiniCode> the opposite occurs to what happened with{" "}
        <MiniCode>Likes</MiniCode>, in this case the only field that depends on another{" "}
        <Link to={SCHEMA.redirect}>schema</Link> is <MiniCode>userId</MiniCode>, but the dependency
        of this field on <MiniCode>User</MiniCode> which is already completed allows{" "}
        <MiniCode>Product</MiniCode> to generate its data without interruption. Once the generation
        of <MiniCode>Product</MiniCode> is completed, it goes to the <Strong>Completed</Strong>{" "}
        stack.
      </P>

      <P>
        The process continues with <MiniCode>Likes</MiniCode> (the only{" "}
        <Link to={SCHEMA.redirect}>schema</Link> remaining). In this case all the fields with
        dependencies that exist inside <MiniCode>Likes</MiniCode> have the necessary data to be
        generated so that the documents can be created without interruption, thus completing the
        <MiniCode>Dataset</MiniCode> creation.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_5} full />

      <H3 title={CYCLIC_DEPENDENCE} />

      <P>
        As previously mentioned, when generating a <MiniCode>Dataset</MiniCode>, there may be errors
        due to bad definition of the <Link to={SCHEMA.redirect}>schemas</Link> or due to a cyclic
        dependency. The <Link to={DATASET_STORE.redirect}>Dataset Store</Link> or the{" "}
        <Link to={REF.redirect}>ref fields</Link> allow for easy schema relationships, but care must
        be taken when handling these relationships.
      </P>

      <P>
        As seen in the previous section, when a <Link to={SCHEMA.redirect}>schema</Link> field that
        is being generated needs data from another <Link to={SCHEMA.redirect}>schema</Link> inside
        the same <MiniCode>Dataset</MiniCode>, the generation process stops and the{" "}
        <Link to={SCHEMA.redirect}>schema</Link> requested is generated.{" "}
        <Strong>
          But what happens when a <Link to={SCHEMA.redirect}>schema</Link> that is stopped is
          requested by another?
        </Strong>{" "}
        Well, it causes an infinite cycle where the data is never finished being generated.
      </P>

      <Img src={DOCS_IMAGE.CIRCULAR_DEPENDENCY} full />

      <Danger title="Cyclic dependency">
        <P>
          If a cyclic dependency is detected, the exception{" "}
          <MiniCode>CyclicAccessDataError</MiniCode> will be thrown{" "}
        </P>
      </Danger>

      <P>
        For this, it is recommended that the <Link to={SCHEMA.redirect}>schemas</Link> have
        unidirectional dependencies, preventing the dependency cycle from returning to a stopped{" "}
        <Link to={SCHEMA.redirect}>schema</Link>.
      </P>

      <Img src={DOCS_IMAGE.NEW_CIRCULAR_DEPENDENCY} full />
    </>
  )
}
