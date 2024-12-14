import { DATASET, SCHEMA, SCHEMA_FIELD } from "@modules/docs/domain/core/sections/concepts"
import { ENUM } from "@modules/docs/domain/core/sections/field-types"
import {
  H2,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  EnumExample,
  EnumResult,
  Example,
  FunctionDefinition,
  FunctionProps,
  LimitExample,
  LimitParams,
  PickParams,
} from "../components"
import {
  CUSTOM_COUNT,
  ELEMENTS_RANGE,
  PICK_SPECIFIC_COUNT,
} from "@modules/docs/domain/core/sections/field-types/pick"

export default function En() {
  return (
    <>
      <P>
        One of the main problems with the <Link to={ENUM.redirect}>enum field</Link> is that if it
        is converted to an <Link to={SCHEMA_FIELD.arrayFieldsUrl}>array of values</Link> it can
        generate repeated values inside the array.
      </P>

      <P>
        For example: If you want to store the available sizes for an ecommerce product, you can use
        an <Link to={ENUM.redirect}>enum field</Link> as follows.
      </P>

      <EnumExample />

      <P>
        Generating an object from the defined <Link to={SCHEMA.redirect}>schema</Link> can result in
        a result similar to the next one.
      </P>

      <EnumResult />

      <P>
        As you can see, in the generated document the size <MiniCode>L</MiniCode> is repeated
        inseide the array, which should not occur. For this problem exists the field{" "}
        <MiniCode>pick</MiniCode>.
      </P>

      <P>
        This field returns for each document an array with a number of values belonging to those
        defined as possible, but in this case will not contain repeated values in the array.
      </P>

      <Definition />

      <PickParams />

      <P>
        Using the example presented above, the definition of sizes for a product can be defined in
        the following way using the <MiniCode>pick</MiniCode> method.
      </P>

      <Example />

      <H2 title={PICK_SPECIFIC_COUNT} />

      <P>
        The elements number to choose from, when is defined as a number, indicates that for each
        generation an array with that number of values will be created.
      </P>

      <Example />

      <H2 title={ELEMENTS_RANGE} />

      <P>
        Similar to the setting to return a value in{" "}
        <Link to={SCHEMA_FIELD.arrayFieldsUrl}>array</Link> form you can define a maximum and
        minimum amount of values that can be chosen in each document.
      </P>

      <LimitParams />

      <LimitExample />

      <H2 title={CUSTOM_COUNT} />

      <P>
        If you want to use the current state of the <Link to={DATASET.redirect}>dataset</Link> or
        the document to be created, you can define the number of elements to choose as a function
        that receives estos states and must return a number or the limits of the array to be
        generated.
      </P>

      <FunctionDefinition />

      <FunctionProps />
    </>
  )
}
