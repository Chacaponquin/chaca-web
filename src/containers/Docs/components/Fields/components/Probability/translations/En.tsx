import { ENUM, PICK } from "@modules/docs/domain/core/sections/field-types"
import {
  Danger,
  H2,
  Info,
  Link,
  MiniCode,
  P,
  Strong,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  FunctionDefinition,
  FunctionExample,
  FunctionProps,
  ProbParams,
  ValueExample,
} from "../components"
import {
  FUNCTION_VALUE,
  PROBABILITY_VALUE,
} from "@modules/docs/domain/core/sections/field-types/probability"
import { DATASET } from "@modules/docs/domain/core/sections/concepts"

export default function En() {
  return (
    <>
      <P>
        When you use an <Link to={ENUM.redirect}>enum field</Link> or a{" "}
        <Link to={PICK.redirect}>pick field</Link> all values defined as possible have the same
        chance of being chosen. For cases where you want to prioritize one or more values over the
        rest, the <MiniCode>probability</MiniCode> method is an ideal choice.
      </P>

      <Definition />

      <ProbParams />

      <Danger title="Exception">
        <P>
          If any error occurs in the declaration of this field type, the exception{" "}
          <MiniCode>WrongProbabilityFieldDefinitionError</MiniCode> will be thrown.
        </P>
      </Danger>

      <H2 title={PROBABILITY_VALUE} />

      <P>
        To set a choice probability value, you must define a float value between{" "}
        <MiniCode>0</MiniCode> and <MiniCode>1</MiniCode> in the <MiniCode>chance</MiniCode>{" "}
        property.{" "}
        <Strong>
          Closer the value is to <MiniCode>1</MiniCode>, more likely it is to be chosen.
        </Strong>
        .
      </P>

      <ValueExample />

      <Info>
        <P>
          If a probability value less than 0 is defined, 0 will be assumed as the assigned value.
          Similarly, if a value greater than 1 is defined, 1 will be assumed as the probability
          value.
        </P>
      </Info>

      <H2 title={FUNCTION_VALUE} />

      <P>
        The probability value does not necessarily have to be a numeric value, because this value
        may depend on the current state of the document or the{" "}
        <Link to={DATASET.redirect}>dataset</Link>.
      </P>

      <FunctionDefinition />

      <FunctionProps />

      <P>
        For example, to assign a user's gender based on the posts they have made, you can define it
        as follows.
      </P>

      <FunctionExample />

      <P>
        In this example, all posts are filtered to find those that belong to the user. Once
        obtained, the number of posts belonging to the category <MiniCode>Beauty</MiniCode> is
        counted. If this number exceeds <MiniCode>3</MiniCode>, the probability that the gender is{" "}
        <MiniCode>female</MiniCode> will be <MiniCode>0.8</MiniCode>, otherwise{" "}
        <MiniCode>0.2</MiniCode>.
      </P>
    </>
  )
}
